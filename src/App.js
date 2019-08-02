import React, { useEffect, useState } from 'react'
import './App.css'

import Alternatives from './Alternatives'

const knownWords = [
  'default', 'happy', 'sad', 'angry'
]

const App = () => {
  const [word, setWord] = useState('default')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/${word}.json`)
      .then(res => res.json())
      .then(setData)
  }, [word])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {knownWords.map(c => (
              <li key={c}>
                <button onClick={() => setWord(c)}>{c}</button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <h1>Alternatives to {word}</h1>
        <Alternatives data={data} />
      </main>
    </div>
  )
}

export default App
