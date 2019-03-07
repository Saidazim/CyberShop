import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import * as CategoryActions from '../category-store/category.actions';
import { Category } from './category.model';

@Injectable()
export class CategoryEffects {

  @Effect()
  getCategories$ = this.actions$
    .pipe(
      ofType(CategoryActions.CategoryActionTypes.GET_CATEGORY),
      switchMap(() => this.db.collection<Category[]>('categories').valueChanges()
        .pipe(
          map(categories => ({ type: '[CATEGORY] Get Success', payload: categories })),
          catchError(() => EMPTY)
        ))
      )

  constructor(
    private db: AngularFirestore,
    private actions$: Actions,
  ) {}
}