import mongoose from "mongoose"

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MONGO DB connnected.")
}

export default connectDB;