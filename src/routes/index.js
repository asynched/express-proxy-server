import { Router } from 'express'
import CORSController from '../controllers/CORSController'

const router = Router()

router.get('/*', CORSController.get)
router.post('/*', CORSController.post)

export default router
