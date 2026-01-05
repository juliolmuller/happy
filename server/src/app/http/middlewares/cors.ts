import cors from 'cors';
import type express from 'express';

export function register(app: express.Application): void {
  app.use(cors());
}
