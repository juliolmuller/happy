import { Router } from 'express'
import orphanagesController from './controllers/orphanages'
import upload from './uploads'

const routes = Router()

routes.get('/api/orphanages', orphanagesController.index)
routes.get('/api/orphanages/:id', orphanagesController.show)
routes.post('/api/orphanages', upload.array('photos'), orphanagesController.store)

export default routes
