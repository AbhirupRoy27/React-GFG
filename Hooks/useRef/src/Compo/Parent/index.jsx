import { useState } from 'react'
import Child from '../Child/index'

const Index = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2> This is parent</h2>
      <h3 onClick={handleClick}>Click to increase: {count}</h3>
      <Child />
    </div>
  )
}

export default Index
