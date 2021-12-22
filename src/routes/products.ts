import { Router } from "express";
import { newProduct, returnAll } from '../controllers/product'

export const products = Router()

products.post('/', newProduct)
products.get('/', returnAll)