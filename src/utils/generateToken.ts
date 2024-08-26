/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import jwt from 'jsonwebtoken'
import config from '../config'

export const generateToken = (id: string) => {
  return jwt.sign({ id }, config.accessTokenSecret!, {
    expiresIn: '60d'
  })
}
