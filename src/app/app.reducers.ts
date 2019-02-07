import { Product } from './stores/product-store/product.model';

export interface AppState {
  readonly product: Product[]
}