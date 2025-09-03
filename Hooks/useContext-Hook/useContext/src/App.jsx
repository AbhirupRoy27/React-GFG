import Index from './Prompt-Drilling/Gp'
import { useState } from 'react'
import Context from './Component/ContextEx'
import Message from './Component/ConMessage'
import Card from './Component/Card'
import './App.css'

function App() {
  const [contextSwitch, setContextSwitch] = useState(false)
  const [load, setLoad] = useState(false)

  const handleContext = () => {
    setContextSwitch(!contextSwitch)
  }

  const handleLoad = () => {
    setLoad(!load)
  }

  // switch to true to view Cards.
  const isCardVisible = false

  return (
    <>
      <div>
        {/* <div className="mainbox">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
      </div> */}
        {contextSwitch ? <Context /> : <Index />}
        {/* un-Comment the above line to see prop-drilling */}
        <button onClick={handleContext}>
          {contextSwitch ? 'switch back' : 'Switch to Context'}
        </button>

        {/* Code  for prop drillind 2 */}
        <button onClick={handleLoad} style={{ marginLeft: '5px' }}>
          {load ? 'un-Load' : 'Load'}
        </button>
        {load && <Message />}
      </div>

      {isCardVisible && (
        <div>
          <Card />
        </div>
      )}
    </>
  )
}

export default App
