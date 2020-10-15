import { Express, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { StatusCodes } from 'http-status-codes'
import Orphanage from '../models/Orphanage'

const relations = ['photos']

async function index(req: Request, res: Response): Promise<void> {
  const orphanageRepository = getRepository(Orphanage)
  const orphanages = await orphanageRepository.find({ relations })

  res.status(StatusCodes.OK).json(orphanages)
}

async function show(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const orphanageRepository = getRepository(Orphanage)

  try {
    const orphanage = await orphanageRepository.findOneOrFail(id, { relations })
    res.status(StatusCodes.OK).json(orphanage)
  } catch {
    res.status(StatusCodes.NOT_FOUND).json({
      message: 'Orfanato não cadastrado.',
    })
  }

}

async function store(req: Request, res: Response): Promise<void> {
  const uploadedFiles = req.files as Express.Multer.File[]
  const orphanageRepository = getRepository(Orphanage)
  const orphanage = orphanageRepository.create({
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    about: req.body.about,
    instructions: req.body.instructions,
    opening_hours: req.body.opening_hours,
    open_on_weekends: req.body.open_on_weekends,
    photos: uploadedFiles.map((photo) => ({ path: photo.filename })),
  })

  await orphanageRepository.save(orphanage)

  res.status(StatusCodes.CREATED).json(orphanage)
}

export default { index, show, store }
