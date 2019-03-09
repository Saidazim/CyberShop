import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/stores/app.reducers';
import * as ProductActions from '../../stores/product-store/product.actions';
import * as CategoryAction from '../../stores/category-store/category.actions';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProduct())
    this.store.dispatch(new CategoryAction.GetCategory())
  }

}
