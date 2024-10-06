import express from 'express'
import { EventController } from './events.controller'
const router = express.Router()

// Add A New Event
router.post('/create', EventController.createEvent)

export const EventsRoutes = router
