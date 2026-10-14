// Import Express and create an instance of it
const express = require("express")
const router = require("./router/userRouter.js")
const logger = require("./middleware/logger.js")
//Initialize Express
const app = express()

app.use(express.json())
app.use(router) 
app.use(router)

app.listen(9000, ()=> {
    console.log("Server is running on port 9000")
})