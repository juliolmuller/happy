import app from './app'

app.listen(process.env.PORT, () => {
  console.log('Application running at')
  console.log(`    http://localhost:${process.env.PORT}`)
  console.log(`    ${process.env.APP_ROOT}\n`)
})
