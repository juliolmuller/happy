import express from 'express'

const port = process.env.PORT || 3030
const app = express()

app.get('/', (_req, res) => {
  res.send('<h1>Hello, there!</h1>')
})

app.listen(port, () => {
  console.log(`Application running in http://localhost:${port}`)
})
