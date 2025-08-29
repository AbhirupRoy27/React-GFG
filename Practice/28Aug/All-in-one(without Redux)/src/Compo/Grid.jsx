import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  marginTop: '2rem',
}

function Grid() {
  return (
    <div
      className="grid grid-cols-4 grid-rows-2 gap-4 text-center"
      style={styles}
    >
      <Link to="/home">Count(UseState)</Link>
      <Link to="/form">GPT Form</Link>
    </div>
  )
}

export default Grid
