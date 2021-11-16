import * as React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css'

export default function App() {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    axios.get('https://www.freetogame.com/api/games').then((response) => {
      const jsonResponse = response.data
      console.log(jsonResponse)
      setGames(jsonResponse)
    })
  }, [])

  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      {games}
    </main>
  )
}