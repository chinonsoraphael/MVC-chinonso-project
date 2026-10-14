const {saveLogsToDB} = require("../controller/user")
const logger = (req,res ,next) => {
const date = new Date ()
const result = `API with endport: "${req.url}" and Method:"${req.method}" was called at: ${date.toLocaleString}`
console.log(result)



next()
}

module.exports = logger
 
