import type express from 'express';
import morgan from 'morgan';

export function register(app: express.Application): void {
  app.use(morgan('dev'));
}
