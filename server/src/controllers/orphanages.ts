import { Express, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { StatusCodes } from 'http-status-codes'
import Orphanage from '../models/Orphanage'
import orphanageView from '../views/orphanagesView'

const relations = ['photos']

async function index(req: Request, res: Response): Promise<void> {
  const orphanageRepository = getRepository(Orphanage)
  const orphanages = await orphanageRepository.find({ relations })

  res.status(StatusCodes.OK).json(orphanageView.renderMany(orphanages))
}

async function show(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const orphanageRepository = getRepository(Orphanage)
  const orphanage = await orphanageRepository.findOneOrFail(id, { relations })

  res.status(StatusCodes.OK).json(orphanageView.render(orphanage))
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
    openingHours: req.body.opening_hours,
    openOnWeekends: req.body.open_on_weekends,
    photos: uploadedFiles.map((photo) => ({ path: photo.filename })),
  })

  await orphanageRepository.save(orphanage)

  res.status(StatusCodes.CREATED).json(orphanageView.render(orphanage))
}

export default { index, show, store }
