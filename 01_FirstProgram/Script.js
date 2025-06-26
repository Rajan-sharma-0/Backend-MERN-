import express from 'express'


const app = express()
app.set('view engine', 'ejs');     // Add ejs in progrma
app.use(express.static('./Public'))  // Add a public file to script js to link all frontend


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/error', (req, res, next) => {
  throw Error('something is wrong')
})



app.get('/contact', (req, res) => {
  res.render('contact')
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
)


app.listen(3000)