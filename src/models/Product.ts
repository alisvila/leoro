import { Schema, model } from 'mongoose';
import { IProduct } from '.';

var productSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true
  }, 
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    public_id: {
      type: String
    },
    url: {
      type: String,
      required: false
    }
  },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
})

export default model<IProduct>('Product', productSchema)