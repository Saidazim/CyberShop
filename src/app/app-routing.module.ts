import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AuthComponent } from './core/auth/auth.component';
import { UserAccountComponent } from './core/user-account/user-account.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { CartComponent } from './core/cart/cart.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: '', component: LayoutComponent, children: [
        // { path: '', component: ProductListComponent, },
        ]},
      { path: 'admin', loadChildren:'./admin/admin.module#AdminModule' },
      { path: 'auth', component: AuthLayoutComponent, children: [
        { path: '', component: AuthComponent },
        { path: 'account', component: UserAccountComponent, canActivate: [LoggedInGuard] },
      ]},
    ]},
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
