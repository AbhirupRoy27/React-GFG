import React from 'react'

function SecondChild({ isDone }) {
  return (
    <div>
      <h2>Prop-Drilling is {isDone ? 'Complete' : 'Loading...'}</h2>
    </div>
  )
}

export default SecondChild

// this gets the prop from the grand parent through prop drilling
// then use it in this component.
// this looks non problematic because this is only simple study project.
// things might get out of hands in the main stream projects.
