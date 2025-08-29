import React, { useState } from 'react'
import { useNames } from '../ReContext/Context/CustomContext'
import './From.css'

export default function NameForm() {
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState('')
  const { gptName, setGptName } = useNames()

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page reload

    if (!gptName.trim()) {
      setError('Name is required')
      return
    }

    setDisplayName(gptName.trim())
    setGptName('') // clear input
    setError('') // reset error
  }

  return (
    <div className="gpt-form">
      <h1 className="text-center text-3xl" style={{ marginBottom: '10px' }}>
        GPT Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" Form-Con bg-gray-100 rounded-md"
      >
        <div className=" Form ">
          <label
            htmlFor="name"
            className="text-black font-semibold  text-sm font-medium mb-1"
          >
            Enter Name:
          </label>
          <input
            id="name"
            type="text"
            value={gptName}
            onChange={(e) => setGptName(e.target.value)}
            placeholder="Name"
            className={`border rounded text-black px-2 py-1 focus:outline-none focus:ring-2 ${
              error
                ? 'border-red-500 focus:ring-red-300'
                : 'border-gray-300 focus:ring-blue-300'
            }`}
          />
          {error && <span className="text-red-600 text-xs mt-1">{error}</span>}
        </div>

        <button
          type="submit"
          // disabled={error}
          className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>

        {displayName && (
          <div className="mt-3 text-lg font-semibold text-center text-black">
            Hi,<span className="text-blue-600 "> {displayName}</span>
          </div>
        )}
      </form>
    </div>
  )
}
