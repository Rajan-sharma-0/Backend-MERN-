import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[jokes, setJokes] = useState([])

  useEffect(() => {
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data[0])
  })
  .catch((error)=>{
    console.log(error);
    
  })
  })
  return (
    <>
    <h1>Hello</h1>
    <p>JOKES: {jokes.length}</p>
    {
      jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
          <p>{joke.punchline}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
