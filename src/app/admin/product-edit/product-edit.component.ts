import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UpdateProduct, AddProduct } from 'src/app/stores/product-store/product.actions';
import { Product } from '../../stores/product-store/product.model';
import { AppState } from 'src/app/stores/app.reducers';
import { Category } from 'src/app/stores/category-store/category.model';

export interface DialogData{
  editMode: boolean;
  product: Product;
  index: number;
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup
  categories: Observable<Category[]>
  deafultPhotoUrl: string = 'https://firebasestorage.googleapis.com/v0/b/cybershop-e1faf.appspot.com/o/no-image.jpg?alt=media&token=8257e530-d8bf-44f7-ac75-046a50fd6c3d'

  constructor(private store: Store<AppState>,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private storage: AngularFireStorage,) { 
      this.categories = this.store.select('category')
    }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      photo: [this.deafultPhotoUrl, Validators.required],
      category: ['', Validators.required],
    });

    if (this.data.editMode) {
      this.productForm.patchValue(this.data.product)
    }
  }

  onSubmit() {
    const form = this.productForm.value

    if (this.data.editMode) {
      let updatedProduct = {...this.data.product, ...form}
      this.store.dispatch(new UpdateProduct(updatedProduct))
    } else {
      this.store.dispatch(new AddProduct(form))
    }

    this.dialogRef.close(form)
  }

  onCancel() {
    this.dialogRef.close()
  }

  async onUpload(photo: File) {
    if (!photo) return

    const data: UploadTaskSnapshot = await this.storage.upload(this.generateRandomString(), photo)
    this.productForm.patchValue({ photo: await data.ref.getDownloadURL() })

  }

  generateRandomString() {
    return 'xxxxxxxx-xxxx'.replace(/[x]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
  
      return v.toString(16);
    });
  }

}
