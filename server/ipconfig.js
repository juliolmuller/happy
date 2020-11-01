/* eslint-disable @typescript-eslint/no-var-requires, no-case-declarations */
const prompt = require('prompt-sync')()
const envfile = require('envfile')
const fs = require('fs')
const os = require('os')

const GLOBAL_ENV = '.env'
const LOCAL_ENV = '.env.local'

const getIPs = () => {
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

const selectIP = (...ips) => {
  switch (ips.length) {
    case 0:
      return undefined

    case 1:
      return ips[0]

    default:
      console.log('Which IP you want to use?')
      ips.forEach((ip, index) => {
        console.log(`${index} => ${ip}`)
      })
      const input = prompt('>>> ')
      const selected = parseInt(input, 10)

      return ips[selected]
  }
}

const setEnv = (key, value) => {
  const envFile = fs.existsSync(LOCAL_ENV) ? LOCAL_ENV : GLOBAL_ENV
  const envVars = fs.readFileSync(`./${envFile}`)
  const parsedEnv = envfile.parse(envVars)

  parsedEnv[key] = value
  fs.writeFileSync(`./${LOCAL_ENV}`, envfile.stringify(parsedEnv))

  console.log(`"${key}=${value}" written in ${LOCAL_ENV}`)
}

const ipAddresses = getIPs()
const ip = selectIP(...ipAddresses)

if (ip) {
  setEnv('APP_ROOT', `http://${ip}`)
} else {
  console.warn('No IPV4 address found for this computer.')
  console.log('Inform the one to be used in ".env" or ".env.local" file.')
}
