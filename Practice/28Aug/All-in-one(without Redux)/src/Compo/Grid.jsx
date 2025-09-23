import React from 'react'
import { Link } from 'react-router-dom'

function Grid() {
  return (
    <>
      <div className="bg-yellow-400 p-2 flex gap-[1rem] font-semibold">
        <Link to="/home">Counter(UseState)</Link>
        <Link to="/form">GPT Form</Link>
        <Link to="/timer">Timer</Link>
      </div>
    </>
  )
}

export default Grid
