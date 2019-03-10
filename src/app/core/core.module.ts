import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule, NbButtonModule, NbSidebarModule, NbListModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    FontAwesomeModule,
    NbListModule,
    ProductsModule
  ]
})
export class CoreModule { }
