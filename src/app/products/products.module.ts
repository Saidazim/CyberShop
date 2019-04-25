import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material';

import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FontAwesomeModule,
    NbButtonModule,
    NbCardModule,
    MatSnackBarModule
  ],
  exports: [
    ProductListComponent,
    NbCardModule,
    FontAwesomeModule,
    NbButtonModule,
    NbCardModule,
  ]
})
export class ProductsModule { }
