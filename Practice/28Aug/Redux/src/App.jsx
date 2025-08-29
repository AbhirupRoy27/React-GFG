import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Slice/CounterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <>
      <div className="flex gap-2 flex-col text-center">
        <h2 className="font-extrabold text-2xl text-center"> New </h2>
        <hr />

        <h1 className="font-semibold text-center">Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Click Me</button>

        {/* Better Way :- */}
        <button onClick={() => dispatch(decrement())} disabled={count <= 0}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
