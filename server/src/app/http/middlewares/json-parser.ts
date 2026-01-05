import express from 'express';

export function register(app: express.Application): void {
  app.use(express.json());
}
