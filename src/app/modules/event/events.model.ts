import { Schema, model } from 'mongoose'
import { EventModel, IEvent } from './events.interface'

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    isFree: {
      type: Boolean,
      required: true
    },
    organizer: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)
export const Event = model<IEvent, EventModel>('Event', eventSchema)
