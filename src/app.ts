import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { createRouteHandler } from 'uploadthing/express'
import { EventsRoutes } from './app/modules/event/events.route'
import { UserRoutes } from './app/modules/users/users.route'
import { uploadRouter } from './config/uploadthing'
const app: Application = express()

// Cors
app.use(cors())

// Parser Need to use before Application Route
app.use(express.json())

// Application Routes
app.use('/api/v1/users/', UserRoutes)
app.use('/api/v1/events/', EventsRoutes)

// Uploadthing route
app.use(
  '/api/uploadthing',
  createRouteHandler({
    router: uploadRouter
  })
)

app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Event App Server')
})

export default app
