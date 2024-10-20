import { Model } from 'mongoose'

export type IEvent = {
  title: string
  description: string
  location: string
  image: string
  startDate: string
  endDate: string
  category: string
  price: string
  isFree: boolean
  organizer: string
  url: string
}

export type EventModel = Model<IEvent, Record<string, unknown>>
