import express from 'express';

const app = express();


app.get()



const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Server is live on http://localhost:${port}`)
})