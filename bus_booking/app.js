const express = require("express")
const app = express()
const db = require("./utils/db_connection")
const bookingRoute = require("./routes/bookingRoute")
const userRoute = require("./routes/userRoutes")
const busRoute = require("./routes/busRoutes")

require("./models")


app.use(express.json())


app.use("/user",userRoute)
app.use("/booking",bookingRoute)
app.use("/bus",busRoute)

db.sync({alter:true}).then(()=>{
    app.listen(3000,(err)=>{
        console.log("Server is running!")
    })
}).catch((err)=>[
    console.log(err)
])   