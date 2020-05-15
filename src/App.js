import React, { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

const App = () => {
  const [characters, setCharacters] = useState([])

  const getCharacters = (amount) => {
    const requests = []

    for (let i = 1; i < amount; i++) {
      requests.push(axios.get(`https://swapi.dev/api/people/${i}`))
    }
    Promise.all(requests)
      .then((response) => {
        setCharacters(response)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getCharacters(15)
  }, [])

  return (
    <div className='starWarsApp'>
      <h1>Star Wars Characters</h1>
      {characters.map((character, i) => (
        <div key={`${character}-${i}`}>{character.data.name}</div>
      ))}
    </div>
  )
}

export default App
