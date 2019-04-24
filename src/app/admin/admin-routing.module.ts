import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductControlComponent } from './product-control/product-control.component';
import { CategoryControlComponent } from './category-control/category-control.component';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'products', component: ProductControlComponent },
      { path: 'categories', component: CategoryControlComponent },
      { path: 'orders', component: AdminOrderListComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
