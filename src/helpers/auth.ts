import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export const authentication = (password: string):string => {
  return crypto.createHmac('sha256', password).update(process.env.PASSWORD_SECRET).digest('hex')
}

export const generateAccessToken = (email: string) => {
  return jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '12h' })
}
