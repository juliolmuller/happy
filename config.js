const prompts = require('prompts')
const envfile = require('envfile')
const colors = require('colors')
const path = require('path')
const fs = require('fs')
const os = require('os')

const GLOBAL_ENV = '.env'
const LOCAL_ENV = '.env.local'
const PRODUCTION_ENV = '.env.production.local'
const SERVER_PORT = 3030

function getIPs() {
  const interfaces = os.networkInterfaces()
  const ipAddresses = []

  Object.keys(interfaces).forEach((name) => {
    interfaces[name].forEach((network) => {
      if (network.family === 'IPv4') {
        ipAddresses.push(network.address)
      }
    })
  })

  return ipAddresses
}

async function selectIP(...ips) {
  switch (ips.length) {
    case 0:
      return Promise.resolve(undefined)

    case 1:
      return Promise.resolve(ips[0])

    default:
      console.log('\n')
      const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Which IP address do you want to serve your application on?',
        initial: 0,
        choices: ips.map((ip) => ({ value: ip })),
      })

      return response.value
  }
}

function createEnvFile(fullPath, fileName, overwriteVars = {}) {
  const targetFile = path.join(fullPath, fileName)
  const isUpdating = fs.existsSync(targetFile)
  const sourceFile = isUpdating ? targetFile : path.join(fullPath, GLOBAL_ENV)
  const envVars = fs.readFileSync(sourceFile)
  const parsedEnvVars = envfile.parse(envVars)
  const finalEnv = envfile.stringify({ ...parsedEnvVars, ...overwriteVars })

  fs.writeFileSync(targetFile, finalEnv)

  isUpdating
    ? console.log(`    File "${fileName}" already exists in "${fullPath}" and has been updated.`)
    : console.log(`    File "${fileName}" has been created in "${fullPath}".`)
}

function configure(dirName, makeEnvLocal, makeEnvProduction, varOverwrite) {
  console.log('\n', colors.inverse(` ${dirName.toUpperCase()} `))

  const fullPath = path.join(__dirname, dirName)

  makeEnvLocal && createEnvFile(fullPath, LOCAL_ENV, varOverwrite)
  makeEnvProduction && createEnvFile(fullPath, PRODUCTION_ENV)
}

function configureServer(ip) {
  configure('server', true, false, ip && {
    APP_ROOT: `http://${ip}:${SERVER_PORT}`,
    PORT: SERVER_PORT
  })
}

function configureMobile(ip) {
  configure('mobile', true, true, ip && {
    API_URL: `http://${ip}:${SERVER_PORT}/api`,
  })
}

function configureWeb(ip) {
  configure('web', true, true, ip && {
    REACT_APP_API_URL: `http://${ip}:${SERVER_PORT}/api`,
  })
}

const ipAddresses = getIPs()

if (!ipAddresses.length) {
  console.log(colors.yellow('    No IPV4 address found in this machine.'))
  console.log(colors.yellow('    If you have an appropriate IP to use, enter it manually in the ".env.local" files inside each subproject.'))
  process.exit(1)
}

selectIP(...ipAddresses).then((ip) => {
  console.log('\n    ', colors.black.bgGreen(`Selected "${ip}" as app root!`))

  configureServer(ip)
  configureMobile(ip)
  configureWeb(ip)
})
