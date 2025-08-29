import './Counter.css'
import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  const handleAdd = () => {
    setNumber(number + 1)
  }

  const handleRemove = () => {
    setNumber(number - 1)
  }

  const handleReset = () => {
    setNumber(0)
  }

  return (
    <>
      <div className="h-full">
        <div className="flex justify-center items-center flex-col h-2/3 gap-4">
          <h1 className="font-bold">UseState Counter</h1>
          <h1 className="font-semibold text-2xl"> Cart Count is: {number}</h1>
          <div className="flex gap-2">
            <button className="padding bg-white text-post" onClick={handleAdd}>
              Add
            </button>
            <button
              className="padding bg-white text-post"
              onClick={handleRemove}
              disabled={number <= 0}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="h-1/3 flex justify-end items-center ">
          {number > 0 && (
            <button
              className="padding bg-white text-post font-bold text-red-500"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  )
}
