import './config';
import express from 'express';

import {
  registerCORS,
  registerErrorHandler,
  registerJsonParser,
  registerLogger,
  registerRoutes,
  registerStaticResources,
} from './http';

export const app = express();

registerCORS(app);
registerLogger(app);
registerJsonParser(app);
registerStaticResources(app);

registerRoutes(app);
registerErrorHandler(app);

export default app;
