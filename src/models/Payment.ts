import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { IPayment } from "."

const paymentSchema = new Schema<IPayment>({
  orderID: {
    type: ObjectId,
    ref: "User"
  },
  amnt: {
    type: Number,
    required: true
  },
  provider: {
    type: String
  },
  status: {
    type: String,
    required: true
  }
});

export default model<IPayment>("Payment", paymentSchema); 