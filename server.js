const express = require ("express")
const app = express()

app.set("view engine", "ejs")
//Root router
app.get("/", (req, res)=> {
    console.log("here")
    res.render("index", {text: "world"})
})
//end point
app.get("/users", (req, res)=>{
    res.send("User List")
})
    
app.get("/users/new", (req, res)=>{
    res.send("User New Form")
})


app.listen(3000)


