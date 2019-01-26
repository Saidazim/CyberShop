import { Action } from '@ngrx/store';
import { Product } from '../product.model';


export enum ProductActionTypes {
  ADD_PRODUCT = '[PRODUCT] Add',
  UPDATE_PRODUCT = '[PRODUCT] Update',
  DELETE_PRODUCT = '[PRODUCT] Delete',
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT

  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT

  constructor(public payload: {
    product: Product,
    index: number
  }) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT

  constructor(public payload: number) {}
}

export type ProductActions = AddProduct | UpdateProduct | DeleteProduct