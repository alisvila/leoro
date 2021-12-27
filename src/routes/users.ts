import { Router } from 'express'
import { getAllUsesrs, createUser } from '../controllers/users'

export const users = Router()

users.get('/', getAllUsesrs)
users.post('/', createUser)