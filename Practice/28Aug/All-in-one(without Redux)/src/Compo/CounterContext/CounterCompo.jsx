import React from 'react'
import useCounterContext from './Context/CustomContext'

export default function CounterContext() {
  const { name, setName } = useCounterContext()

  // console.log(name, setName)
  return (
    <div className="bg-yellow-50 p-[5%] flex flex-col ">
      <h1 className="text-2xl text-center">- Counter Context -</h1>
      <div className="flex gap-[1.5rem] justify-center mt-[3%] items-center">
        <h2 className="text-3xl">{name}</h2>
        <h1
          onClick={() => setName(name + 1)}
          className="p-2 bg-red-200 rounded font-bold"
        >
          Click me
        </h1>
      </div>
    </div>
  )
}
