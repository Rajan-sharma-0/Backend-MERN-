const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', function(erq, res){
    res.render('home')
})

app.listen(3000)