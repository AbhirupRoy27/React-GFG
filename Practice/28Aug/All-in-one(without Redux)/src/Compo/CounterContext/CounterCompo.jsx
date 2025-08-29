import React from 'react'
import useCounterContext from './Context/CustomContext'

export default function CounterContext() {
  const { name, setName } = useCounterContext()

  // console.log(name, setName)
  return (
    <div>
      <h1>Counter Context</h1>
      <h2>{name}</h2>
      <h1 onClick={() => setName(name + 1)}>Click me</h1>
    </div>
  )
}
