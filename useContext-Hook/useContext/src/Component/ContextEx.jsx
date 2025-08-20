import React, { useContext } from 'react'
import { CountContext } from '../Context/CountContext'

export default function ContextEx() {
  const { num, setNum } = useContext(CountContext)

  return (
    <>
      <h1>Context API !!</h1>
      <h2>The Number: {num}</h2>
      <button onClick={() => setNum(num + 1)}>Add One</button>
    </>
  )
}
