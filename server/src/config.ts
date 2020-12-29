import dotenv from 'dotenv-flow'
import pg from 'pg'

/**
 * Setup environment variables
 */
if (process.env.NODE_ENV !== 'production') {
  const config = dotenv.config({ purge_dotenv: true })

  if (config.error && process.env.NODE_ENV !== 'production') {
    throw config.error
  }
}

/**
 * Configure PostgreSQL types parsers used by Knex
 */
const types = pg.types.builtins
const parser = (value: string) => (value === null ? null : Number(value))

pg.types.setTypeParser(types.INT4, parser)
pg.types.setTypeParser(types.INT8, parser)
pg.types.setTypeParser(types.NUMERIC, parser)
