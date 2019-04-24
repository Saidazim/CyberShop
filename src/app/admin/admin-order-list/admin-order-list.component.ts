import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.scss']
})
export class AdminOrderListComponent implements OnInit {

  ordersCollection: AngularFirestoreCollection = this.db.collection<any>('orders')
  orders: Observable<any>
  displayedColumns: string[] = ['userName', 'phone', 'email', 'address', 'products', 'total'];

  constructor(
    private db: AngularFirestore, ) { 
    this.orders = this.ordersCollection.valueChanges()
    }

  ngOnInit() {
  }

}
