import React, { useState } from 'react'

function ConMessage() {
  return (
    <div>
      <Parent />
    </div>
  )
}

function Parent() {
  const [message, setMessage] = useState(' Parent ')

  const updateMessage = (newMsg) => {
    setMessage(newMsg)
  }
  return (
    <>
      <h1>Hello, {message}</h1>
      <Child onUpdate={updateMessage} />
    </>
  )
}

function Child({ onUpdate }) {
  return <GrandChild onUpdate={onUpdate} />
}

function GrandChild({ onUpdate }) {
  return (
    <>
      <h3>Child Component</h3>
      <button onClick={() => onUpdate('Message From Child!!')}>
        Send Message
      </button>
    </>
  )
}
export default ConMessage
