/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import ApiError from '../../../errors/apiError'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './users.service'

// Sign UP/Register controller
const signUp: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body
    if (!user) {
      throw new ApiError(400, 'User data not provided')
    }
    const result = await UserService.signUp(user)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully!',
      data: result
    })
  }
)

export const UserController = {
  signUp
}
