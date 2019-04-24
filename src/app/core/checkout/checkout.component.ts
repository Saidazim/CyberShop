import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { CartProduct } from 'src/app/stores/cart-store/cart.model';
import { AppState } from 'src/app/stores/app.reducers';
import { ClearCart } from 'src/app/stores/cart-store/cart.actions';


export interface DialogData{
  products: CartProduct[];
  userName: string;
  total: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup
  ordersCollection: AngularFirestoreCollection = this.db.collection<any>('orders')
  userName: string
  totalSum: number

  constructor(public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private db: AngularFirestore,
    private store: Store<AppState>,
  ) {
    this.userName = this.data.userName
    this.totalSum = this.data.total
    }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.checkoutForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40),]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150),]],
    })
  }

  onSubmit() {
    const form = this.checkoutForm.value
    let order = { ...form, userName: this.userName, totalSum: this.totalSum, products: this.data.products }

    this.store.dispatch(new ClearCart)
    this.ordersCollection.add(order)
    
    this.dialogRef.close(order)
  }

  onCancel() {
    this.dialogRef.close()
  }
}
