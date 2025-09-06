import { useState } from 'react'
import './App.css'
import Child from './Components/Child'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1 onClick={() => setCount(count + 1)}>Hello Ji!!!</h1>
        <h2>{count}</h2>
      </div>
      <Child />
    </>
  )
}

export default App
