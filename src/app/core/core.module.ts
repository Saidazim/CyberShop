import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule, NbSidebarModule, NbListModule, NbActionsModule, NbUserModule, NbSearchModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material';

import { ProductsModule } from '../products/products.module';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CarouselComponent,
    AuthComponent,
    UserAccountComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    FontAwesomeModule,
    NbListModule,
    ProductsModule,
    NbActionsModule,
    NbUserModule,
    NbSearchModule,
    CarouselModule.forRoot(),
    NgxAuthFirebaseUIModule,
    AngularFireAuthModule,
    MatIconModule,
  ]
})
export class CoreModule { }
