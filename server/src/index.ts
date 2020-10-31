import path from 'path'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import routes from './routes'
import errorHandler from './errors/handler'
import './database/connection'

const port = process.env.PORT || 3030
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/photos', express.static(path.join(__dirname, '..', 'storage')))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Application running in http://localhost:${port}`)
})
