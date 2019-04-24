import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CartProduct } from 'src/app/stores/cart-store/cart.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AppState } from 'src/app/stores/app.reducers';
import { ClearCart } from 'src/app/stores/cart-store/cart.actions';


export interface DialogData{
  products: CartProduct[];
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup
  ordersCollection: AngularFirestoreCollection = this.db.collection<any>('orders')

  constructor(public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private db: AngularFirestore,
    private store: Store<AppState>,) {
     }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.checkoutForm = this.fb.group({
      phone: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(12),]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40),]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150),]],
    })
  }

  onSubmit() {
    const form = this.checkoutForm.value

    this.store.dispatch(new ClearCart)
    this.ordersCollection.add(form)
    
    this.dialogRef.close(form)
  }

  onCancel() {
    this.dialogRef.close()
  }
}
