import { useState } from 'react'
import './App.css'
import { Memoized } from './Components/Child' // Named Export
// import Child from './Components/Child'     // Default Export

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  return (
    <>
      <div>
        <h2 onClick={() => setCount(count + 1)}>Hello Ji!!!</h2>
        <h2 onClick={() => setNumber(number + 1)}>
          Click (Only Parent Re-render) <b>{number}</b>
        </h2>
      </div>
      {/* This is also a valid way */}
      {/* <Child value={count} /> */}
      <Memoized value={count} /> {/* Same as <Child value={count} />*/}
    </>
  )
}

export default App
