import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NbSidebarService } from '@nebular/theme';

import { AppState } from 'src/app/stores/app.reducers';
import * as ProductActions from '../../stores/product-store/product.actions';
import * as CategoryAction from '../../stores/category-store/category.actions';
import { Category } from 'src/app/stores/category-store/category.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  selectedCategory: string
  categories: Observable<Category[]>
  displayCarousel: boolean = true

  constructor(private store: Store<AppState>, private sidebarService: NbSidebarService) {
    this.categories = this.store.select('category')
   }
  
  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProduct())
    this.store.dispatch(new CategoryAction.GetCategory())
  }

  toggle() {
    this.sidebarService.toggle(false, 'left')
  }

  onAllCategories() {
    this.selectedCategory = ''
    this.displayCarousel = true
  }

  onCategory(categorName: string) {
    this.selectedCategory = categorName
    this.displayCarousel = false
  }

}
