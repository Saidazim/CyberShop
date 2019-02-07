import { Product } from './stores/product-store/product.model';
import { Category } from './stores/category-store/category.model';

export interface AppState {
  readonly product: Product[];
  readonly category: Category[];
}