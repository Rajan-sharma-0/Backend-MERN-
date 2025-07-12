import express from "express"
import {user as usermodule} from "./usermodule.js"


const app = express()

app.get("/", function(req, res){
    res.send("hello")
})


app.get("/create", async function(req, res){
   let createuser = await usermodule.create({
       name: "Rajan",
       email: "rajan@gmail.com",
       userName: "rajan",
    })
    res.send(createuser)
})

app.listen(3000) 




