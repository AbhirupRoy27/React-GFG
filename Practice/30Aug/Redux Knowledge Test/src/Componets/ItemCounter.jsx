import { useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/Slice'

function ItemCounter({ count }) {
  const dispatch = useDispatch()

  return (
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
  )
}

export default ItemCounter
