import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Buttons({ name }) {
  const styleButton = {
    padding: '4px',
    width: '100px',
    height: '45px',
    background: '#333',
    color: '#fff',
    borderRadius: 10,
    margin: '3px',
  }

  const { cart, cartDispatch } = useContext(CartContext)

  const handleAdd = () => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: name,
    })
  }
  const handleRemove = () => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: name,
    })
  }
  const handleClear = () => {
    if (cart.cart.length === 0) {
      alert('The Cart is Empty!')
    } else {
      cartDispatch({
        type: 'CLEAR_CART',
        payload: name,
      })
    }
  }

  return (
    <div>
      <button onClick={handleAdd} style={styleButton}>
        Add to Cart
      </button>
      <button onClick={handleRemove} style={styleButton}>
        Remove
      </button>
      <button onClick={handleClear} style={styleButton}>
        Clear Cart
      </button>
    </div>
  )
}
