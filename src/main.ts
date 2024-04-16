import express  from "express";
import dotenv from 'dotenv'
import { createNewUser } from "./routes/routes.createuser";

dotenv.config()

const app = express()
const port = 3000


app.use(express.json())

createNewUser(app)

app.listen(port, () => {
    console.log(`Server Running at: http://localhost:${port}`)
})