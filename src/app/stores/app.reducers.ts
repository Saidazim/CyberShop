import { ActionReducerMap } from '@ngrx/store';

import { Product } from './product-store/product.model';
import { Category } from './category-store/category.model';
import { productReducer } from './product-store/product.reducer';
import { categoryReducer } from './category-store/category.reducer';

export interface AppState {
  readonly product: Product[];
  readonly category: Category[];
}

export const reducers: ActionReducerMap<AppState> = {
  product: productReducer,
  category: categoryReducer,
};