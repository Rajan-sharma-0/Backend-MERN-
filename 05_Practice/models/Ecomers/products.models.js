import mongoose from "mongoose";

const productSchema = new mangoose.Schema({
    discription:{
        type: String,
        requirefd: true
    },
    name:{
        type: String,
        requirefd: true
    },
    productImage:{
        type: String,
        

    },
    price:{
        type: Number,
        default: 0,
    },
    stock:{
        type: Number,
        default: 0
    },
    catogary:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorys",
        required: true

    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }


},{timestamps: true})

export const product = mongoose.model('product', productSchema)