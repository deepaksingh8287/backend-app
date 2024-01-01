import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
// require("dotenv").config()

dotenv.config({
    path: "./env"
})
connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => console.log("server is running at", process.env.PORT))
}).catch((err) => {
    console.log("mongodb connection failed!", err)
})














/*
const app = express()
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("error occured")
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log("app is listening on" + process.env.PORT)
            })
        } catch (error) {
            console.log("error", error)
            throw error
        }
    })
    */
