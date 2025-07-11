import mongoose, {Schema} from "mongoose";

mongoose.connect(`mongodb://localhost:27017/mongoosepractice`)

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    userName: String
})

export const user = mongoose.model("user", userSchema)
