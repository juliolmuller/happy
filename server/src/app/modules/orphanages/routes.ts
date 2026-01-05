import express from 'express';

import { uploadMany } from '../../http';
import { createOrphanageController } from './create';
import { findOrphanageController } from './find';
import { listOrphanagesController } from './list';

export function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  router.get('/', listOrphanagesController);
  router.get('/:orphanageId', findOrphanageController);
  router.post(
    '/',
    uploadMany('photos', { mimetype: /^image\/[a-z-]+$/i }),
    createOrphanageController,
  );

  appRouter.use(prefix, router);
}

export default register;
