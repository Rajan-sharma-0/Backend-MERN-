import express from 'express'

const app = express();

// app.get('/', function(req, res){
//   res.send('Home page')
// })

app.get("/api/jokes", function(req, res){
    const jokes = [
        [
  {
    "id": 1,
    "title": "general",
    "content": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!"
  },
  {
    "id": 2,
    "title": "programming",
    "content": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs."
  },
  {
    "id": 3,
    "title": "general",
    "content": "Why did the scarecrow win an award?",
    "punchline": "Because he was outstanding in his field!"
  },
  {
    "id": 4,
    "title": "tech",
    "content": "Why was the computer cold?",
    "punchline": "It left its Windows open."
  },
  {
    "id": 5,
    "title": "dad",
    "content": "I only know 25 letters of the alphabet.",
    "punchline": "I don’t know y."
  }
]

    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is live on http://localhost:${port}`)
})