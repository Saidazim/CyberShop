import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Category } from 'src/app/stores/category-store/category.model';
import { AppState } from 'src/app/stores/app.reducers';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {

  categories: Observable<Category[]>
  displayedColumns: string[] = ['name', 'actions'];
  
  constructor(private store: Store<AppState>, ) {
    this.categories = this.store.select('category')
   }

  ngOnInit() {
  }

}
