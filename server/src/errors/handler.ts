import { ErrorRequestHandler } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const handler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    error.inner.forEach((err) => {
      errors[err.path] = err.errors
    })

    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: ReasonPhrases.UNPROCESSABLE_ENTITY, errors })
    return
  }

  console.error(error)

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
}

export default handler
