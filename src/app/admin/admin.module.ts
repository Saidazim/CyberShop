import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NbCardModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductControlComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    FontAwesomeModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class AdminModule { }
