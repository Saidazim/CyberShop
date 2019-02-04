import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductControlComponent } from './product-control/product-control.component';

const routes: Routes = [
  {
    path: '',
    component: ProductControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
