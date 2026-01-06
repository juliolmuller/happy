import express from 'express';
import path from 'node:path';

export function register(app: express.Application): void {
  app.use('/static', express.static(path.resolve(process.cwd(), 'storage')));
}
