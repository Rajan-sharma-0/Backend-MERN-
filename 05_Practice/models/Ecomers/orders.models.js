import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity:{
        type: Number,
        required: true,
    }

}, {timestapms: true})

const orderSchema = mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        anum:["PENDING","CANCLLED", 'DELIVERED', ],
        default: "PENDING"
    }
},{timestamps: true})

export const order = mongoose.model("order", orderSchema)