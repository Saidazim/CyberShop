import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss']
})
export class ProductControlComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  products: Observable<Product[]>
 
  constructor(private store: Store<AppState>) {
    this.products = this.store.select('product')
   }

  ngOnInit() {
  }

  onAdd() {
    console.log('Add');
  }

  onEdit(product: Product, index: number) {
    console.log('Edit', product);
  }

  onDelete(product: Product) {
    console.log('delete');
  }

}
