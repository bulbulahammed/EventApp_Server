import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { UserRoutes } from './app/modules/users/users.route'
const app: Application = express()

// Cors
app.use(cors())

// Application Routes
app.use('/api/v1/users/', UserRoutes)

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Event App Server')
})

export default app
