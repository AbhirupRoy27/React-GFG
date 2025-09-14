import { useState, useCallback } from 'react'
import Child from './Child'

export default function Parent() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  // stable reference unless dependencies change
  const handleDo = useCallback(() => setCount((c) => c + 1), [])
  // const handleDo = () => setCount((c) => c + 1)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setOther((o) => o + 1)}>
        Render Parent {other}
      </button>
      <Child onDo={handleDo} />
    </>
  )
}
