const express = require("express")
const router = express.Router()

const{allUsers,newUser,updateUser, deleteUser }= require("../controller/user.js")

const logger = require("../middleware/logger.js")

router.get("/allUsers",logger, allUsers)
router.post("/newUser",logger, newUser)
router.put("/updateUser/:id", updateUser) 
router.delete("/deleteUser/:id", deleteUser)  

module.exports = router 
 