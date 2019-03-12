import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Category } from 'src/app/stores/category-store/category.model';
import { AppState } from 'src/app/stores/app.reducers';
import { DeleteCategory } from 'src/app/stores/category-store/category.actions';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {

  categories: Observable<Category[]>
  displayedColumns: string[] = ['name', 'icon', 'actions'];
  
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

  onEdit(category: Category) {
    this.openDialog({
      editMode: true,
      category,
    })
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteCategory(id))
  }

  openDialog(data: object): void {
    const dialogRef = this.dialog.open(CategoryEditComponent, { data })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
