import { useDispatch } from 'react-redux'
import { resetValue } from '../Redux/Slice'
import { useEffect } from 'react'

function OrderButtons() {
  const dispatch = useDispatch()

  // Testing Cleanup Function.
  useEffect(() => {
    console.log('did Mount')

    return () => {
      console.log('unmounted')
    }
  }, [])

  const handleOrder = () => {
    setTimeout(() => {
      dispatch(resetValue())
      alert('order placed')
    }, 1000)
  }

  return (
    <div className="reset">
      <h2 onClick={() => dispatch(resetValue())}>Reset</h2>
      <h2 onClick={handleOrder}>Place Order</h2>
    </div>
  )
}

export default OrderButtons
