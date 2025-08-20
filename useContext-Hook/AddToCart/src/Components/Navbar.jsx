import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Navbar({ cartView, setCartView }) {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
  }

  const styleButton = {
    padding: '8px',
    height: '45px',
    background: '#333',
    color: '#fff',
    borderRadius: 10,
  }

  const valueStyle = {
    padding: '4px',
    fontSize: '15px',
    background: 'lightblue',
    fontFamily: 'sans-serif',
    borderRadius: '50%',
    boxShadow: '1px 1px 4px lightblue',
  }
  const { cart } = useContext(CartContext)

  const handleCartView = () => {
    setCartView(!cartView)
  }

  return (
    <div style={pageStyle}>
      <h2>
        Cart Count: <span style={valueStyle}> {cart.cart.length} </span>
      </h2>
      <button onClick={handleCartView} style={styleButton}>
        {cartView ? 'View Cart' : 'Continue Shopping'}
      </button>
    </div>
  )
}
