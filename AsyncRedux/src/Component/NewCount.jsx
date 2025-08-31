import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Slice/CounterSlice'

export default function NewCount() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="flex gap-2 flex-col text-center bg-teal-500 p-6 ">
      <h2 className="font-extrabold text-4xl text-center text-green-700">
        REDUX
      </h2>
      <h1 className="font-semibold text-center text-2xl">Count: {count}</h1>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-solid p-2 rounded-sm font-medium bg-white"
        >
          Click Me
        </button>

        {/* Better Way :- */}
        <button
          onClick={() => dispatch(decrement())}
          className={`border-2 border-solid p-2 rounded-sm font-medium bg-white ${
            count <= 0 ? 'opacity-60' : ' '
          }`}
          disabled={count <= 0}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

{
  /* <button
      onClick={() => dispatch(decrement())}
      disabled={count <= 0 ? true : false}>
        Decrement
    </button> */
}
