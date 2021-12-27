import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const cartModel = new mongoose.Schema({
    items: [
        {
            quantity: {
                type: Number,
                required: true
            },
            product: {
                type: ObjectId,
                ref: 'Product'
            }
        }
    ]
})

export const cart = mongoose.model('Cart', cartModel)