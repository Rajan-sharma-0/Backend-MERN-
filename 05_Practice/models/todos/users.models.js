import mongoose from 'mongoose';

const userSchema = new mongooose.Schema(
    {
        username:  {
            type: String,
            required: true, 
            unique: true,
            lowercase: true
        }, 
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        Password: {
            type: String,
            required: true,
            // max: [8, 'Password must be at least contain 8 character']
        },
        // isActive: Boolean,
    },
    {timestamps: true}
)

export const User = mongoose.model("Users", userSchema)