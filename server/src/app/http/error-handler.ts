import type express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';

type ValidationErrors = Record<string, string[]>;

export function registerErrorHandler(app: express.Application): void {
  app.use(((error, _req, res, _next): void => {
    if (error instanceof ZodError) {
      const formattedErrors: ValidationErrors = {};

      Object.entries(error.flatten().fieldErrors).forEach(([path, errors]) => {
        formattedErrors[path] = errors as string[];
      });

      res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: ReasonPhrases.UNPROCESSABLE_ENTITY, errors: formattedErrors });
      return;
    }

    console.error(error);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }) satisfies express.ErrorRequestHandler);
}
