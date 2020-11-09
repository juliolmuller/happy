import './config'
import path from 'path'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import errorHandler from './errors/handler'
import './database/connection'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)
app.use('/photos', express.static(path.join(__dirname, '..', 'storage')))
app.use('/static', express.static(path.join(__dirname, '..', 'public', 'static')))
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Application running at')
  console.log(`    http://localhost:${process.env.PORT}`)
  console.log(`    ${process.env.APP_ROOT}\n`)
})
