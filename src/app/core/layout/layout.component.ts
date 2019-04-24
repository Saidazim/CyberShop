import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NbSidebarService, NbSearchService } from '@nebular/theme';

import { AppState } from 'src/app/stores/app.reducers';
import * as ProductActions from '../../stores/product-store/product.actions';
import * as CategoryAction from '../../stores/category-store/category.actions';
import * as CartAction from '../../stores/cart-store/cart.actions';
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
  cartCount: Observable<number>

  constructor(private store: Store<AppState>, 
    private sidebarService: NbSidebarService,
    private searchService: NbSearchService,) {
    
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        if (data.term) {
          this.displayCarousel = false

          this.store.dispatch(new ProductActions.FilterProduct(data.term))
          this.selectedCategory = '';
        }
      })

    this.categories = this.store.select('category')
    this.cartCount = this.store.select('cart', 'productsCount')
   }
  
  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProduct())
    this.store.dispatch(new CategoryAction.GetCategory())
    this.store.dispatch(new CartAction.GetCartList())
  }

  toggle() {
    this.sidebarService.toggle(true, 'left')
  }

  onAllCategories() {
    this.selectedCategory = ''
    this.displayCarousel = true
    this.store.dispatch(new ProductActions.GetProduct())
  }

  onCategory(categorName: string) {
    this.selectedCategory = categorName
    this.displayCarousel = false
  }

}
