import { Router } from 'express'
import orphanagesController from './controllers/orphanages'

const routes = Router()

routes.get('/api/orphanages', orphanagesController.index)
routes.get('/api/orphanages/:id', orphanagesController.show)
routes.post('/api/orphanages', orphanagesController.store)

export default routes
