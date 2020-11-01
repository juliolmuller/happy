import dotenv from 'dotenv-flow'
import path from 'path'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import errorHandler from './errors/handler'
import './database/connection'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/photos', express.static(path.join(__dirname, '..', 'storage')))
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Application running at')
  console.log(`    http://localhost:${process.env.PORT}`)
  console.log(`    ${process.env.APP_ROOT}:${process.env.PORT}`)
})
