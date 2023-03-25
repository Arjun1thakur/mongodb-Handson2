let express = require("express")
require('dotenv').config({path:'.env'})
let app=express()

let PORT=process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send({"message":"home"})
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})

// go to database folder & run database.js