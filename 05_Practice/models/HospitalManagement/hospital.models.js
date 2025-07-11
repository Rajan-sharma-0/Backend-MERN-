import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    addressLine1:{
        type:String,
        required: true
    },
    addressLine2:{
        type:String,
        
    },
    city:{
        type:String,
        required: true
    },
    pincode:{
       type:String,
       required: true 
    },
    SprcilaisedIn:[
        {
            type: String
        }
    ]
},{timestamps: true})

export const hospital = mongoose.model("hospital", hospitalSchema)