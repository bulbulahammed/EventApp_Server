import { Model } from 'mongoose'

export type IEvent = {
  title: string
  description: string
  location: string
  imageUrl: string
  startDate: string
  endDate: string
  categoryId: string
  price: string
  isFree: boolean
  url: string
}

export type EventModel = Model<IEvent, Record<string, unknown>>
