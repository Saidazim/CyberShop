import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../stores/product-store/product.model';
import { AppState } from 'src/app/stores/app.reducers';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>

  constructor(private store: Store<AppState>) {
    this.products = this.store.select('product')
  }

  ngOnInit() {
  }
  
}
