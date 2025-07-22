import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:27017/mongoosepractice`)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    userName: String
})

export const user = mongoose.model("user", userSchema)
