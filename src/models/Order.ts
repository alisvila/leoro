import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { IOrder } from "."

const orderSchema = new Schema<IOrder>({
  userID: {
    type: ObjectId,
    ref: "User"
  },
  paymentID: {
    type: ObjectId,
    required: true
  },
  products: {
    type: [ObjectId],
    ref: "Product"
  },
  total: {
    type: Number,
    required: true
  }
});

export default model<IOrder>("Order", orderSchema); 