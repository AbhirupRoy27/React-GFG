import React from 'react'
import { useNames } from './Context/CustomContext'
import { useState } from 'react'

export default function ReContext() {
  const [displayName, setDisplayName] = useState('')
  const { name, setName } = useNames()

  // console.log(name)

  const handleSubmit = () => {
    setDisplayName(name)
    setName('')
  }

  return (
    <div className="h-full">
      <div className="h-2/3 flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-bold text-3xl">General Form</h1>
        <div className="flex gap-4">
          <label className="font-bold">Enter Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
            className="bg-white text-black"
            style={{ padding: '2px' }}
          />
        </div>
        <div className="bg-white text-post w-[60px] text-center rounded-sm">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div className="h-1/3 flex justify-center items-start">
        <h1 className="text-3xl">
          Hello, <b> {displayName} </b>
        </h1>
      </div>
    </div>
  )
}
