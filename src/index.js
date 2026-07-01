import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"


dotenv.config()



connectDB()
.then( () => {
    try {
        app.listen( process.env.PORT, () => {
            console.log("App is running on port: ", process.env.PORT)
        })
    } catch (error) {
        console.log( "Error in starting the server! ", error)
    }
})
.catch( (err) => {
    console.log("DataBase connection failed! ", err)
})