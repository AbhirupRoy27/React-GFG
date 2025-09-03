import Text from './SecondChild'

function FirstChild({ isDone, setIsDone }) {
  const handleIsDone = () => {
    setIsDone(!isDone)
  }

  return (
    <div>
      <button onClick={handleIsDone}>
        {isDone ? 'Take Back' : 'Pass'} the Value
      </button>
      <Text isDone={isDone} />
    </div>
  )
}

export default FirstChild

// this is the first child
// this gets the prop from parent and use what is needed and pass the rest
// to the inner child to process.
