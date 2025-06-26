
import { asyncHnadler } from "../utils/asyncHandler.js";

const registerUser = asyncHnadler(async(req, res)=>{
    res.status(200).json({
        message: "Chal gaya Bhia tera code",
    })
})

export { registerUser, } 


// echo "# Backend-MERN-" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Rajan-sharma-0/Backend-MERN-.git
// git push -u origin main