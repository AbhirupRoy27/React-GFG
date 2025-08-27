import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Count() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.val)

  return (
    <div>
      <h1 className="font-semibold">Count: {count}</h1>
      <button
        onClick={() => dispatch({ type: 'counter/incremented' })}
        className="mb-8"
      >
        Click Me
      </button>
    </div>
  )
}
