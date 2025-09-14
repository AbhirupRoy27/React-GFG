import React from 'react'

const Child = React.memo(({ onDo }) => {
  console.log('Child render')
  return <button onClick={onDo}>Child</button>
})

export default Child
