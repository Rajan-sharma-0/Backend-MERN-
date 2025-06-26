import mongoose from "mongoose";

const Hospitalhours = new mongoose.Schema({},{timestamps: true})

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagnosedwith:{
        type: String,
        required: true
    },
    address:{
        type: String, 
        required: true1
    },
    age:{
        type: String, 
        required: true1
    },
    bloodgroup:{
        type: String, 
        required: true1
    },
    gender:{
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    addmitedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital"
    }

},{timestamps: true})

export const patient = mongoose.model("patient", patientSchema)