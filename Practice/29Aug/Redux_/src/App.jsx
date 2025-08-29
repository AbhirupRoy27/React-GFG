import './App.css'
import { increment } from './Slice/slice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
    </>
  )
}

export default App
