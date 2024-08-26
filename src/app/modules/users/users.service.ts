/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import bcrypt from 'bcrypt'
import ApiError from '../../../errors/apiError'
import { generateToken } from '../../../utils/generateToken'
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

// Login Service

type LoginResult = {
  user: IUser
  token: string
}

const login = async (user: IUser): Promise<LoginResult | null> => {
  try {
    const loggedInUser = await User.findOne({
      email: user.email
    })
    if (
      !loggedInUser ||
      !(await bcrypt.compare(user.password, loggedInUser.password))
    ) {
      if (!loggedInUser) {
        throw new ApiError(404, 'User Not Found !')
      } else {
        throw new ApiError(400, 'Incorrect Password !')
      }
    }
    // Generate a JWT token for the user
    const token = generateToken(loggedInUser.id)
    // Return the JWT token
    return { token, user: loggedInUser }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(400, 'Failed to Login')
  }
}

export const UserService = {
  signUp,
  login
}
