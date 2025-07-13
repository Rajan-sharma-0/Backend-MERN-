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


app.get("/update", async function(req, res){
//    usermodule.findOneAndUpdate(findone, update, {new: true})
        let update = await usermodule.findOneAndUpdate({userName:'nishant'}, {userName:"gopal", name: "nishant", }, {new:true})
        res.send(update)
})


app.get("/read", async function(req, res){
//    usermodule.find()                         // This syntex is used to show this whole data in the db
//    usermodule.findone({userName:"rajan"})    // This syntex is used to read the specific user data
        // let read = await usermodule.findOne({userName:'nishant'})
        let read = await usermodule.find()
        res.send(read)
})

app.get("/delete", async function(req, res){
    let deleteUser = await usermodule.findOneAndDelete({userName:"gopal"})
    res.send(deleteUser)
})






app.listen(3000) 




