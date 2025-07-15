import express from "express"
const app = express()
const {dirname:__dirname} = import.meta
import path from "path"
import {user as userModel} from "./models/usermodels.js"



app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function(req, res){
    res.render("index") 
})
app.get("/read", async function(req, res){
    let user = await userModel.find()
    res.render("read", {user}) 
})
app.get("/delete:id", async function(req, res){
    let user = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read'); 
})
app.post("/create", async function(req, res){
        // Destructure and ensure single values
        const { name, email, image } = req.body;
        // Create user with validated data
        const createdUser = await userModel.create({
            name: String(name),
            email: String(email),
            image: String(image)
        });
        
        res.redirect("/read");
    
});



app.listen(3000)