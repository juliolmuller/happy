import type express from 'express';

export type Controller = (request: express.Request, response: express.Response) => Promise<void>;
