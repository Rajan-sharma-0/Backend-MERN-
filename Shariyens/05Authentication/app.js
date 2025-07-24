import express from "express";
const app = express();


app.get('/', function(req, res){ 
})
app.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("Read page");
});

app.listen(3000);
