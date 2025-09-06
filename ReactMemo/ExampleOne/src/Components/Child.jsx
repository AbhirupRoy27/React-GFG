import React from 'react'

// For Named Export
export const Memoized = React.memo(function Child({ value }) {
  console.log('Child Re-rendered')
  return (
    <div>
      <h1>Child Component {value}</h1>
    </div>
  )
})

// For Default Export
function Child({ value }) {
  console.log('Child Re-rendered')
  return (
    <div>
      <h1>Child Component {value}</h1>
    </div>
  )
}

export default React.memo(Child)
