import { Product } from './products/product.model';

export interface AppState {
  readonly product: Product[]
}