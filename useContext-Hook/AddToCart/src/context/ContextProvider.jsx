import { CartContext } from './CartContext'
import { useReducer } from 'react'
import { CartReducer } from '../reducer/CartReducer'

export default function ContextProvider({ children }) {
  const cartInitial = {
    cart: [],
  }

  const [cart, cartDispatch] = useReducer(CartReducer, cartInitial)

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}
