import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

export const usersModel = mongoose.model('user', userSchema)