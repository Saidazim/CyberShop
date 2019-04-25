import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Product } from '../../stores/product-store/product.model';
import { AppState } from 'src/app/stores/app.reducers';
import { notNullSelect } from 'src/app/utils';
import * as CartAction from '../../stores/cart-store/cart.actions';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

  products: Observable<Product[]>
  @Input() categoryName: string
  userId: string
  userDoc: AngularFirestoreDocument
  constructor(private store: Store<AppState>,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.products = this.store.pipe(notNullSelect(state => state.product.filteredProducts))
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid
        this.userDoc = this.db.collection<any>('users').doc(this.userId)
      }
     })
  }

  ngOnInit() {
  }


  ngOnChanges() {
    if (this.categoryName) {
      this.products = this.store.select('product', 'productList').pipe(
        map(products => products.filter(product => product.category === this.categoryName))
      )
    } else {
      this.products = this.store.pipe(notNullSelect(state => state.product.filteredProducts))
    }
  }

  public addToCart(product: Product) {
    this.store.dispatch(new CartAction.AddToCart({product}))
  }

  public addToFavourites(product: Product) {
    if (this.userId) {
      this.userDoc.collection('favorites').add(product)

      this.snackBar.open('Added to favourites', 'ok', {
        duration: 2000,
      })
    } else {
      this.router.navigate(['/auth'])
    }
  }
  
}
