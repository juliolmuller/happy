import dotenv from 'dotenv-flow';
import path from 'node:path';

/**
 * Setup environment variables
 */
if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config({
    path: path.resolve(__dirname, '..', '..'),
    purge_dotenv: true,
  });

  if (result.error) {
    throw result.error;
  }
}
