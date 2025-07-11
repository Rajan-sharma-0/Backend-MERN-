import express from "express"
const app = express()

app.use(function(req, res, next){
    console.log("we are in midlleware");
    next()
})

app.get("/", function(res, req){
    res.send("hello")
    // console.log('hello');
})

app.use((err, req, res, next)=>{
    console.error(err.stack, "something went wrong")
    res.state(500).send("erron on server side")
})

app.listen(3000)