import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { reducers } from './stores/app.reducers';
import { ProductEffects } from './stores/product-store/product.effects';
import { ProductsModule } from './products/products.module';
import { CategoryEffects } from './stores/category-store/category.effects';

 
library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(reducers), 
    EffectsModule.forRoot([ProductEffects, CategoryEffects]),
    BrowserAnimationsModule,
    FontAwesomeModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    CoreModule,
    ProductsModule,
    NgxAuthFirebaseUIModule.forRoot({ ...environment.firebase },
      () => 'CyberShop',
     {
       enableFirestoreSync: true,
       toastMessageOnAuthSuccess: true,
       toastMessageOnAuthError: true
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
