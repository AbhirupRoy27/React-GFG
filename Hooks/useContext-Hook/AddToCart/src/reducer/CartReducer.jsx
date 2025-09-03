export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.includes(action.payload)) {
        return state
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((p) => p !== action.payload),
      }
    case 'CLEAR_CART':
      // console.log(state.cart.length)
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
