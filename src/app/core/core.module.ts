import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule, NbSidebarModule, NbListModule, NbActionsModule, NbUserModule, NbSearchModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { LayoutComponent } from './layout/layout.component';
import { ProductsModule } from '../products/products.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [LayoutComponent, CarouselComponent,],
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
  ]
})
export class CoreModule { }
