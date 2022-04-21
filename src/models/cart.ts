import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';
import { ICart } from "."

const cartModel = new Schema<ICart>({
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

export default model<ICart>('Cart', cartModel)