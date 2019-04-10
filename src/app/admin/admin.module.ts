import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule, NbLayoutModule, NbButtonModule, NbInputModule, NbSelectModule, NbSidebarModule, NbListModule, NbUserModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryControlComponent } from './category-control/category-control.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    ProductControlComponent,
    ProductEditComponent,
    CategoryControlComponent,
    AdminLayoutComponent,
    CategoryEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    MatTableModule,
    FontAwesomeModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    MatDialogModule,
    NbInputModule,
    NbSelectModule,
    NbSidebarModule,
    NbListModule,
    NbUserModule,
  ],
  entryComponents: [
    ProductEditComponent,
    CategoryEditComponent,
  ]
})
export class AdminModule { }
