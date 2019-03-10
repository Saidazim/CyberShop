import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: '', component: LayoutComponent, children: [
        // { path: '', component: ProductListComponent, },
        ]},
    ]},
  { path: 'admin', loadChildren:'./admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
