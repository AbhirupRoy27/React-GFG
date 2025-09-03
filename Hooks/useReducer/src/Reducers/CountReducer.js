export const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'reduce':
      return {
        ...state,
        value: state.value - 1,
      }
    case 'reset':
      return {
        ...state,
        value: (state.value = 0),
      }
    case 'addname':
      return {
        ...state, // keep other state properties like value
        name: [...state.name, action.payload], // add new name immutably
      }

    default:
      return state
  }
}
