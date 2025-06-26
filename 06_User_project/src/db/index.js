import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constanse.js";


const connectDB = async() =>{
    try{
       const connectionInstruction =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB Port ${connectionInstruction}`);
       
    } catch(error){
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
        
    }
}

export default connectDB