import React, { useRef } from 'react'

function Testing() {
  let count = useRef(0)

  console.log(count)

  const handleRef = () => {
    count.current = count.current + 1
  }

  const totalValue = () => {
    console.log('you Clicked: ' + count.current + ' times')
    console.log(`Entire Ref Object:`, count)
  }

  return (
    <div className="ref-con">
      <h1> this will not change !</h1>
      <h2>{count.current}, no re-render</h2>
      <div>
        <button onClick={handleRef}>Ref + 1</button>
        <button onClick={totalValue}>Total</button>
      </div>
    </div>
  )
}

export default Testing
