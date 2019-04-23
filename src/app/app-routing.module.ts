import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AuthComponent } from './core/auth/auth.component';
import { UserAccountComponent } from './core/user-account/user-account.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: '', component: LayoutComponent, children: [
        // { path: '', component: ProductListComponent, },
        ]},
      { path: 'admin', loadChildren:'./admin/admin.module#AdminModule' },
      { path: 'auth', component: AuthComponent},
      { path: 'account', component: UserAccountComponent, canActivate: [LoggedInGuard] },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
