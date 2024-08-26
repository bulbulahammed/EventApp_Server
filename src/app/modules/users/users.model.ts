import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },

    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
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
export const User = model<IUser, UserModel>('User', userSchema)
