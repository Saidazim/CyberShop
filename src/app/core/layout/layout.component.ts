import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/stores/app.reducers';
import * as ProductActions from '../../stores/product-store/product.actions';
import * as CategoryAction from '../../stores/category-store/category.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProduct())
    this.store.dispatch(new CategoryAction.GetCategory())
  }

}
