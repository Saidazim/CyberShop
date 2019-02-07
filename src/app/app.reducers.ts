import { ActionReducerMap } from '@ngrx/store';

import { Product } from './stores/product-store/product.model';
import { Category } from './stores/category-store/category.model';
import { productReducer } from './stores/product-store/product.reducer';
import { categoryReducer } from './stores/category-store/category.reducer';

export interface AppState {
  readonly product: Product[];
  readonly category: Category[];
}

export const reducers: ActionReducerMap<AppState> = {
  product: productReducer,
  category: categoryReducer,
};