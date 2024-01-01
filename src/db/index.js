import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/flipkart-clone`)
        console.log(`/n MONGODB connected successfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error", error)
        process.exit(1)
    }
}
export default connectDB