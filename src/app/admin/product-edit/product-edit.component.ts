import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UpdateProduct, AddProduct } from 'src/app/stores/product-store/product.actions';
import { Product } from '../../stores/product-store/product.model';
import { AppState } from 'src/app/stores/app.reducers';

export interface DialogData{
  editMode: boolean,
  product: Product,
  index: number
  }

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup

  constructor(private store: Store<AppState>,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    if (this.data.editMode) {
      this.productForm =this.fb.group({
        name: [this.data.product.name, Validators.required],
        price: [this.data.product.price, Validators.required],
        description: [this.data.product.description, Validators.required],
      })
    } else {
      this.productForm = this.fb.group({
        name: ['', Validators.required],
        price: [0, Validators.required],
        description: ['', Validators.required],
      })
    }
  }

  onSubmit() {
    const form = this.productForm.value
    
    if (this.data.editMode) {
      this.store.dispatch(new UpdateProduct({
        product: form,
        index: this.data.index
      }))
    } else {
      this.store.dispatch(new AddProduct(form))
    }
    this.dialogRef.close(form)
  }

  onCancel() {
    this.dialogRef.close()
  }

}
