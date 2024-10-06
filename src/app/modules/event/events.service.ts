import ApiError from '../../../errors/apiError'
import { IEvent } from './events.interface'
import { Event } from './events.model'

// Create Event Service
const createEvent = async (event: IEvent): Promise<IEvent | null> => {
  const createdEvent = await Event.create(event)
  if (!createdEvent) {
    throw new ApiError(400, 'Failed To Create Event')
  }
  return createdEvent
}

export default { createEvent }
