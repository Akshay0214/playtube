import mongoose from "mongoose"


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Successfully connected to mongoDB Database!!")
    } catch(err) {
        console.log("Error in connecting to mongoDB : ", err)
    }
}

export default connectDB