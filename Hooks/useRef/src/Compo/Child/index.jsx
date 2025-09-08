import React from 'react'
import { useRef } from 'react'

const Index = () => {
  let childCount = useRef(0)
  console.log(`The Child Re-Rendered with parent: ${childCount.current}`)

  const handleChild = () => {
    childCount.current = childCount.current + 1
  }

  return (
    <>
      <h3 onClick={handleChild}>Child Component {childCount.current}</h3>
    </>
  )
}

export default Index
