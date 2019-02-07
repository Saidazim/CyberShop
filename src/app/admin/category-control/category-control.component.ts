import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Category } from 'src/app/stores/category-store/category.model';
import { AppState } from 'src/app/stores/app.reducers';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {

  categories: Observable<Category[]>
  displayedColumns: string[] = ['name', 'actions'];
  
  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.categories = this.store.select('category')
   }

  ngOnInit() {
  }

  onAdd() {
    this.openDialog({
      editMode: false,
    })
  }

  onEdit(category: Category, index: number) {
    this.openDialog({
      editMode: true,
      category,
      index
    })
  }

  openDialog(data: object): void {
    const dialogRef = this.dialog.open(CategoryEditComponent, { data })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
