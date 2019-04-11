import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../stores/product-store/product.model';
import { DeleteProduct } from 'src/app/stores/product-store/product.actions';
import { AppState } from 'src/app/stores/app.reducers';
import { ProductEditComponent } from '../product-edit/product-edit.component';


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss']
})
export class ProductControlComponent implements OnInit {

  displayedColumns: string[] = ['name', 'photo', 'price', 'description', 'category', 'actions'];
  products: Observable<Product[]>
 
  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.products = this.store.select('product')
   }

  ngOnInit() {
  }

  onAdd() {
    this.openDialog({
      editMode: false,
    })
  }

  onEdit(product: Product) {
    this.openDialog({
      editMode: true,
      product
    })
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteProduct(id))
  }

  openDialog(data: object): void {
    const dialogRef = this.dialog.open(ProductEditComponent, { data })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
