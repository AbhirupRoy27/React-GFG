import { useReducer } from 'react'
import { countReducer } from './Reducers/CountReducer'
import './App.css'
import { useState } from 'react'

function App() {
  const initialState = {
    value: 0,
    name: [],
  }

  // let setName = useRef('')
  const [name, setName] = useState('')
  const [count, dispatch] = useReducer(countReducer, initialState)

  console.log(count)

  const handleClickAdd = () => {
    dispatch({ type: 'add' })
  }

  const handleClickSub = () => {
    dispatch({ type: 'reduce' })
  }

  const handleClick = () => {
    dispatch({ type: 'reset' })
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({ type: 'addname', payload: name })
    setName('') // reset the input field
  }

  return (
    <>
      <div className="Box-1">
        <h1>Count: {count.value}</h1>
        <h2 onClick={handleClickAdd}>ADD</h2>
        <h2 onClick={count.value > 0 && handleClickSub}>SUB</h2>
        <h2 onClick={count.value > 0 && handleClick} style={{ color: 'red' }}>
          RESET
        </h2>
      </div>

      <div className="Box-2">
        <label htmlFor="namebox">Enter Name:</label>
        {/* Controled Input */}
        <input
          id="namebox"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          maxLength={15}
        />
        <button onClick={handleSubmit} disabled={!name}>
          Add Name
        </button>

        {count.name.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {/* <p>{name}</p> */}
      </div>
    </>
  )
}

export default App
