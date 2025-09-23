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
    <div className="h-full bg-blue-50 p-[2%]">
      <h1 className="font-bold text-3xl mt-[10px] mb-[10px] text-center">
        General Form
      </h1>
      <div className=" flex gap-[0.5rem] justify-center items-center">
        <div className="flex gap-4 items-center">
          <label className="font-bold">Enter Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
            className="bg-white text-black p-2"
          />
        </div>
        <div className="bg-red-100 text-post text-center rounded-sm">
          <button onClick={handleSubmit} className="p-2 font-bold">
            Submit
          </button>
        </div>
      </div>

      <div className="flex justify-center items-start mt-[10px] mb-[10px]">
        <h1 className="text-3xl flex">
          Hello, {displayName ? <b> {displayName} </b> : <p>--</p>}
        </h1>
      </div>
    </div>
  )
}
