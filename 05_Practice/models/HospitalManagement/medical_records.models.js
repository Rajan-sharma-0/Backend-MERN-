import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({},{timestamps: true})

export const medical = mongoose.model("medical", medicalSchema)