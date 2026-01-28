const express = require("express")
const app = express()
const studentRoute = require("./routes/studentRoutes")
const postRoute = require("./routes/postRoutes")
const db = require("./utils/db_connection")
require("./models")


app.use(express.json())

app.use("/",studentRoute)
app.use("/", postRoute)

db.sync({force:true}).then(()=>{
    app.listen(3000,(err)=>{
        console.log("Server is running!")
    })
}).catch((err)=>[
    console.log(err)
])