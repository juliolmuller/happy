import { Request, Response, NextFunction } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function handler(error: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.error(error)

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
}

export default handler
