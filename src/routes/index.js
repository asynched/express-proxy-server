import { Router } from 'express'
import CorsController from '../controllers/CorsController'

const router = Router()

router.get('/*', CorsController.get)
router.post('/*', CorsController.post)

export default router
