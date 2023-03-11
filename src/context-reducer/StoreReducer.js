export const initialState = {
  total: 0,
  products: []
}

const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        products: action.payload
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        products: action.payload
      }
    case "UPDATE_PRICE":
      return {
        ...state,
        total: action.payload
      }
    default:
      throw new Error()
  }
}

export default StoreReducer;