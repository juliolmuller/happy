import { Router } from 'express'
import orphanagesController from './controllers/orphanages'

const routes = Router()

routes.post('/api/orphanages', orphanagesController.store)

export default routes
