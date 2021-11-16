import * as React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css'

export default function App() {
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
      const jsonResponse = response.data
      console.log(jsonResponse)
      setPokemons(jsonResponse.results)
    })
  }, [])

  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      {pokemons.map((pokemon) => <h1 key={pokemon.name}>{pokemon.name}</h1>)}
    </main>
  )
}