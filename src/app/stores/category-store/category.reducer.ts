import * as CategoryActions from './category.actions';
import { Category } from './category.model';


export const initialState: Category = {
  id: 'a', 
  name: 'Cell Phones',
}

export function categoryReducer(state: Category[] = [initialState], action: CategoryActions.CategoryActions) {
  switch (action.type) {
    case CategoryActions.CategoryActionTypes.GET_CATEGORY_SUCCESS:
      return [...action.payload]

    case CategoryActions.CategoryActionTypes.ADD_CATEGORY:
      return [...state, action.payload]
    
    case CategoryActions.CategoryActionTypes.UPDATE_CATEGORY:
      state[action.payload.index] = action.payload.category
      return [...state]
    
    case CategoryActions.CategoryActionTypes.DELETE_CATEGORY:
      state.splice(action.payload, 1)
      return [...state]
    
    default:
      return state
  }
}