import { Product } from './product.model';
import * as ProductActions from './product.actions';


export const initialState: Product = {
  name: 'iPhone',
  price: 500,
  description: 'This is overrated phone. Do not buy it!',
}

export function productReducer(state:Product[] = [initialState], action: ProductActions.ProductActions) {
  switch (action.type) {
    case ProductActions.ProductActionTypes.GET_PRODUCT_SUCCESS:
    return [...action.payload]

    case ProductActions.ProductActionTypes.ADD_PRODUCT:
      return [...state, action.payload]
    
    case ProductActions.ProductActionTypes.UPDATE_PRODUCT:
      let updatedState = state
      updatedState[action.payload.index] = action.payload.product
      return [...updatedState]
    
    case ProductActions.ProductActionTypes.DELETE_PRODUCT:
      state.splice(action.payload, 1)
      return [...state]
    
    default:
      return state
  }
}