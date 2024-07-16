import express from "express"
import dotenv from "dotenv"
import dbConnection from "./conn.js"
import userRouter from "./routes/userRoutes.js"


dotenv.config()
await dbConnection()
const app = express()
const PORT = 4000
app.use(express.json())

app.use("/api/v1/user", userRouter)

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})