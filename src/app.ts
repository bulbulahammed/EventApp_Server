import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

// Cors
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Event App Server')
})

export default app
