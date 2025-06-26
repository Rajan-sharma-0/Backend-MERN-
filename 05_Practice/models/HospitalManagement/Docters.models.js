import mongoose from "mongoose";

const doctersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qulifications:{
        type: String,
        required: true
    },
    experienceInYear:{
        type: Number,
        default: 0
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "hospital"
        }
    ]
},{timestamps: true})

export const docter = mongoose.model("docter", doctersSchema)