import express from 'express';

import { registerOrphanagesRoutes } from '../modules/orphanages';

export function registerRoutes(app: express.Application): void {
  const router = express.Router();

  registerOrphanagesRoutes('/orphanages', router);

  app.use('/api', router);
}
