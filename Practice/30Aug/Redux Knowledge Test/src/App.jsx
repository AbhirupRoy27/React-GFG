import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, resetValue } from './Redux/Slice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  const handleOrder = () => {
    setTimeout(() => {
      dispatch(resetValue())
      alert('order placed')
    }, 1000)
  }

  return (
    <>
      <h1>Hello Ji!</h1>
      <div className="product-card">
        <div className="photo"></div>

        <div className="heading">
          <h1
            onClick={() => dispatch(increment())}
            className={count > 0 ? 'inc' : ''}
          >
            {count === 0 ? 'Add One' : '+'}
          </h1>
          {count > 0 && <h2>{count}</h2>}
          {count > 0 && (
            <h1 onClick={() => dispatch(decrement())} className="dsc">
              -
            </h1>
          )}
        </div>
        {count > 0 && (
          <div className="reset">
            <h2 onClick={() => dispatch(resetValue())}>Reset</h2>
            <h2 onClick={handleOrder}>Place Order</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default App
