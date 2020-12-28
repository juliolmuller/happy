import dotenv from 'dotenv-flow'

if (process.env.NODE_ENV !== 'production') {
  const config = dotenv.config({ purge_dotenv: true })

  if (config.error && process.env.NODE_ENV !== 'production') {
    throw config.error
  }
}
