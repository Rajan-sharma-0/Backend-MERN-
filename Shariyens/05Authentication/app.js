import express from "express";
const app = express();
// import cookieParser from 'cookie-parser'
// app.use(cookieParser())

// app.get('/', function(req, res){
//     res.cookie("name", "Rajan")
//     res.send('done')
// })

import bcrypt from "bcrypt";
app.get("/", function (req, res) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("helloo", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

app.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("Read page");
});

app.listen(3000);
