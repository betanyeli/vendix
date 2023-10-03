import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
           <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Ven.de</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
