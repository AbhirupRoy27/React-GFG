import { useRef, useState } from 'react'
import './App.css'
import HelloWithName from './HOCFiles/HelloWithName'

function App() {
  const [name, setName] = useState('')
  const [sendName, setSendName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSendName(name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name: </label>
        <input
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <div>
        <HelloWithName name={sendName} />
      </div>
    </>
  )
}

export default App
