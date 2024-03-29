import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { CartProduct } from 'src/app/stores/cart-store/cart.model';
import { AppState } from 'src/app/stores/app.reducers';
import * as CartAction from '../../stores/cart-store/cart.actions';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList: Observable<CartProduct[]>
  totalSum: Observable<number>
  checkoutProducts: CartProduct[]
  userName: string
  checkoutTotal: number
  
  
  constructor(
    private store: Store<AppState>,
    private router: Router,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog,
  ) { 
    this.cartList = this.store.select('cart', 'products')
    this.totalSum = this.store.select('cart', 'totalSum')

    this.cartList.subscribe(products => this.checkoutProducts = products)
    this.afAuth.user.subscribe(user => {
     if (user && user.displayName) {
       this.userName = user.displayName
     }
    })
    this.totalSum.subscribe(total => this.checkoutTotal = total)

  }

  ngOnInit() {
    this.store.dispatch(new CartAction.GetCartList())
  }

  public increase(id: string) {
    this.store.dispatch(new CartAction.UpdateProductQuantity({id, action: 'increase'}))
  }

  public decrease(id: string) {
    this.store.dispatch(new CartAction.UpdateProductQuantity({id, action: 'decrease'}))
  }

  public remove(id: string) {
    this.store.dispatch(new CartAction.RemoveFromCart(id))
  }

  public checkout() {
    if (!this.userName) {
      this.router.navigate(['/auth'])
    } else {
      const dialogRef = this.dialog.open(CheckoutComponent, {
        data: {
          products: this.checkoutProducts,
          userName: this.userName,
          total: this.checkoutTotal
        }
      })
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result)
      });
    }


  }
  
}
