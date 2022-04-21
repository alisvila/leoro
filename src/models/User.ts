import { Schema, model } from 'mongoose';
import { IUser } from "."

const userSchema = new Schema<IUser>({
    username: { 
      type: String,
      required: true 
    },
    password: { type: String, required: true },
    resetToken: String,
    resetTokenExpiration: Date,
})

export default model<IUser>('User', userSchema)