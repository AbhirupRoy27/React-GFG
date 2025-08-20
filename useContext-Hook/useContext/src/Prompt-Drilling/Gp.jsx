import Main from './FirstChild'
import { useState } from 'react'

function Gp() {
  const [isDone, setIsDone] = useState(false)

  return (
    <div style={{ paddingTop: '30px' }}>
      <h1>Props-Drilling</h1>
      <Main isDone={isDone} setIsDone={setIsDone} />
    </div>
  )
}

export default Gp

// this file is the parent of the two child Components
// the state variable is sent to the child Components using props-drilling
// props-drilling is sending props multiple times inside
// this might make the code complex to debug.
