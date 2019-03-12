import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/stores/app.reducers';
import * as ProductActions from '../../stores/product-store/product.actions';
import * as CategoryAction from '../../stores/category-store/category.actions';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit {

  constructor(private store: Store<AppState>, private sidebarService: NbSidebarService) { }
  
  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProduct())
    this.store.dispatch(new CategoryAction.GetCategory())
  }
  
  toggle() {
    this.sidebarService.toggle(false, 'admin-left')
  }

}
