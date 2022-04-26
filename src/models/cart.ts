import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';
import { ICart } from "."

const cartModel = new Schema<ICart>(
  {
    // user: {
    //   type: ObjectId,
    //   ref: "User",
    // },
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
},
{
  timestamps: true,
}
);

export default model<ICart>('Cart', cartModel)
