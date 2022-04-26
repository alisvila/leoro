import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';
import { ICategory } from "."

var categorySchema = new Schema<ICategory>({
    title: {
      type: String,
      required: true
    },
    products: {
      type: [ObjectId],
      ref: "Product"
    },
})

export default model<ICategory>('Category', categorySchema)