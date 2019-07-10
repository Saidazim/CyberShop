import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbSidebarModule, NbListModule, NbActionsModule, NbUserModule, NbSearchModule, NbInputModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsModule } from '../products/products.module';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CarouselComponent,
    AuthComponent,
    UserAccountComponent,
    AuthLayoutComponent,
    CartComponent,
    CheckoutComponent,
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbListModule,
    ProductsModule,
    NbActionsModule,
    NbUserModule,
    NbSearchModule,
    CarouselModule.forRoot(),
    NgxAuthFirebaseUIModule,
    AngularFireAuthModule,
    MatIconModule,
    MatDialogModule,
    NbInputModule,
  ],
  entryComponents: [CheckoutComponent]
})
export class CoreModule { }
