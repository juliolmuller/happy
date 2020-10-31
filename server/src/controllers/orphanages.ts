import { Express, RequestHandler } from 'express'
import { getRepository } from 'typeorm'
import { StatusCodes } from 'http-status-codes'
import * as Yup from 'yup'
import Orphanage from '../models/Orphanage'
import orphanageView from '../views/orphanagesView'

const relations = ['photos']

const index: RequestHandler = async (req, res) => {
  const orphanageRepository = getRepository(Orphanage)
  const orphanages = await orphanageRepository.find({ relations })

  res.status(StatusCodes.OK).json(orphanageView.renderMany(orphanages))
}

const show: RequestHandler = async (req, res) => {
  const { id } = req.params
  const orphanageRepository = getRepository(Orphanage)
  const orphanage = await orphanageRepository.findOneOrFail(id, { relations })

  res.status(StatusCodes.OK).json(orphanageView.render(orphanage))
}

const store: RequestHandler = async (req, res) => {
  const uploadedFiles = req.files as Express.Multer.File[]
  const orphanageRepository = getRepository(Orphanage)

  const data = {
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    about: req.body.about,
    instructions: req.body.instructions,
    openingHours: req.body.opening_hours,
    openOnWeekends: req.body.open_on_weekends === 'true',
    photos: uploadedFiles.map((photo) => ({ path: photo.filename })),
  }

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    // eslint-disable-next-line no-magic-numbers
    about: Yup.string().required().max(300),
    instructions: Yup.string().required(),
    openingHours: Yup.string().required(),
    openOnWeekends: Yup.boolean().required(),
    photos: Yup.array(Yup.object().shape({
      path: Yup.string().required(),
    })),
  })
  await schema.validate(data, { abortEarly: false })

  const orphanage = orphanageRepository.create(data)
  await orphanageRepository.save(orphanage)

  res.status(StatusCodes.CREATED).json(orphanageView.render(orphanage))
}

export default { index, show, store }
