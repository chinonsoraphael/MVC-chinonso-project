const database = require("../model/database.json")
const fs = require("fs")

const saveToDB = (data)=> {
    return new Promise((resolve,reject)=>{
        fs.writeFile("./model/database.json",data,(error,data)=>{
            if (error) {
                reject("Error writing to file")
            } else {
                resolve("File written successfully")
            }
        })
    })
}
const saveLogsToDB = (data)=> {
    return new Promise ((resolve,reject)=>{
        fs.appendFile("./model/database.txt",  data,(error,data)=>{
            if (error){
                reject(error)
            } else {
                resolve("File written successfully")
            }
        }
        )
    })
}
const allUsers = (req, res) => {  
    const users = database
    res.status(200).json({data: users})
}
const newUser = async(req,res)=> {
    const name = req.body.name
    const gender= req.body.gender
    const id = database.length +1
    const user = {
        id:id,
        name:name,
        gender:gender,
    }
    // Update the Database Array
    database.push(user)
    await saveToDB(JSON.stringify(database,null,2))

    // Send a Response to the Client
    res.status(201).json({message:"User created successfully",data:user})

}


    const updateUser = async (req, res)=>{
        const id = req.params.id
        const name = req.body.name
        const gender = req.body.gender

        const user = database.find((e)=>e.id == id)
        if (user == null) {
            return res.status(404).json(
                {message:"User not found"
            }) 
        }
        user.name = name  || user.name
        user.gender = gender  || user.gender
        await saveToDB(JSON.stringify(database,null,2))
        res.status(200).json({
            message:"User updated successfully",
            data:user
        })

    }

const deleteUser = async (req, res)=>{
    const id = req.params.id
    const userIndex = database.findIndex((e)=>e.id == id)
    database.splice(userIndex, 1)
    await saveToDB(JSON.stringify(database,null,2))
    res.status(200).json({
        message:"User deleted successfully"
    })
}
module.exports = {
    allUsers,
    newUser, 
    updateUser,
    deleteUser,
}
 