import { Router } from "express";
import { newProduct, returnAll, getAll } from '../controllers/product'

export const products = Router()

products.post('/', newProduct)
products.get('/', getAll)