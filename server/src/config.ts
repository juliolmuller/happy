import './database/connection'
import pg from 'pg'

/**
 * Configure PostgreSQL types parsers used by Knex
 */
const types = pg.types.builtins
const parser = (value: string) => (value === null ? null : Number(value))

pg.types.setTypeParser(types.INT4, parser)
pg.types.setTypeParser(types.INT8, parser)
pg.types.setTypeParser(types.NUMERIC, parser)
