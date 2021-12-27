import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    resetToken: String,
    resetTokenExpiration: Date,
})

export const User = mongoose.model('User', userSchema)