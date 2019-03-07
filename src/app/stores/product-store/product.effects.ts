import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import * as ProductActions from '../product-store/product.actions';
import { Product } from './product.model';

@Injectable()
export class ProductEffects {

  @Effect()
  getProducts$ = this.actions$
    .pipe(
      ofType(ProductActions.ProductActionTypes.GET_PRODUCT),
      switchMap(() => this.db.collection<Product[]>('products').valueChanges()
        .pipe(
          map(products => ({ type: '[PRODUCT] Get Success', payload: products })),
          catchError(() => EMPTY)
        ))
      )

  constructor(
    private db: AngularFirestore,
    private actions$: Actions,
    
  ) {}
}