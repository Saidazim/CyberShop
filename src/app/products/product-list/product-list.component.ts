import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private store: Store<AppState>) {
    this.products = this.store.pipe(notNullSelect(state => state.product.filteredProducts))
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
  
}
