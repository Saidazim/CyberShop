import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Product } from 'src/app/stores/product-store/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  products: any
  userId: string


  constructor(
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {
    this.afAuth.user.subscribe(user => {
        this.userId = user.uid
        
        this.products = this.db.collection<any>('users').doc(user.uid).collection('favorites').snapshotChanges().pipe(
          map(products => products.map(product => {
            const data = product.payload.doc.data() as Product[];
            const id = product.payload.doc.id;
            return { ...data, id  };
          }))
          )
      })
     }

  ngOnInit() {
  }

  removeFromFavourites(product: Product) {
    this.db.collection<any>('users').doc(this.userId).collection('favorites').doc(product.id).delete()
  }

}
