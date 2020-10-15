import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { StatusCodes } from 'http-status-codes'
import Orphanage from '../models/Orphanage'

async function store(req: Request, res: Response): Promise<void> {
  const orphanageRepository = getRepository(Orphanage)
  const orphanage = orphanageRepository.create({
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    about: req.body.about,
    instructions: req.body.instructions,
    opening_hours: req.body.opening_hours,
    open_on_weekends: req.body.open_on_weekends,
  })

  await orphanageRepository.save(orphanage)

  res.status(StatusCodes.CREATED).json(orphanage)
}

export default { store }
