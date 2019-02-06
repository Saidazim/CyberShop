import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/app/products/product.model';
import { AppState } from 'src/app/app.reducers';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { DeleteProduct } from 'src/app/products/store/product.actions';


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss']
})
export class ProductControlComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
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

  onEdit(product: Product, index: number) {
    this.openDialog({
      editMode: true,
      product,
      index
    })
  }

  onDelete(index: number) {
    this.store.dispatch(new DeleteProduct(index))
  }

  openDialog(data: object): void {
    const dialogRef = this.dialog.open(ProductEditComponent, { data })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
