import express from 'express'
const app = express()
const {dirname: __dirname} = import.meta;
import path from 'path'


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const dirname = app.use(express.static(path.join(__dirname, 'public')))
// console.log(__dirname);



app.get("/", function(req, res){
    res.render('index')
})
app.get("/api/v1/:username", function(req, res){
    res.send(`welcome ${req.params.username}`)
})
app.get("/api/v1/:username/:age", function(req, res){
    res.send(`welcome ${req.params.username} your age is ${req.params.age}`)
    
})



app.listen(3000)