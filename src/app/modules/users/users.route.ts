import express from 'express'
import { UserController } from './users.controller'
const router = express.Router()

// Register a new user
router.post('/sign-up', UserController.signUp)

export const UserRoutes = router
