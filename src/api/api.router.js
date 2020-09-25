import { Router } from 'express'
import { apiMessage } from './api.controllers'

const router = Router()

router.get('/', apiMessage)

export default router
