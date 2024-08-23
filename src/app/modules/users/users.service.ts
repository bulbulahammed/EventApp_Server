import bcrypt from 'bcrypt'
import ApiError from '../../../errors/apiError'
import { IUser } from './users.interface'
import { User } from './users.model'

const signUp = async (user: IUser): Promise<IUser | null> => {
  const { email, password, ...rest } = user
  const saltRounds = 10

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new ApiError(400, 'User with this email already exists')
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create a new user object with the hashed password
    const newUser = {
      ...rest,
      email,
      password: hashedPassword
    }

    const createdUser = await User.create(newUser)
    return createdUser
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(400, 'Failed to Sign Up')
  }
}

export const UserService = {
  signUp
}
