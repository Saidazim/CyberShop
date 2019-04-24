import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { ProductListComponent } from './product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FontAwesomeModule,
    NbButtonModule,
    NbCardModule,
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
