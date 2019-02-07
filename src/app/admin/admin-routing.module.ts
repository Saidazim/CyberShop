import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductControlComponent } from './product-control/product-control.component';
import { CategoryControlComponent } from './category-control/category-control.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'products', component: ProductControlComponent },
      { path: 'categories', component: CategoryControlComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
