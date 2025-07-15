import mongoose, {Schema} from "mongoose"

// Use the correct MongoDB connection string
mongoose.connect("mongodb://127.0.0.1:27017/DataBaseServer")

const userSchema = new Schema({
    name: String,
    email: String,   // fixed typo
    image: String,
})

export const user = mongoose.model("user", userSchema)