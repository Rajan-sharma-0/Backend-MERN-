import express from 'express'
const app = express()


app.get('/', function(req, res){
    res.cookie("name", "Rajan")
    res.send('done')
})

app.listen(3000)