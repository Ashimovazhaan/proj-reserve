import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {AuthInterceptor} from './auth.interceptor';



@NgModule({
  imports: [


    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductDetailComponent,
    ProductListComponent,

    CategoryComponent,
    ProductDetailComponent,
    NavComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent
  ],
  providers:
    {
      provide: HTTP_INTERCEPTORS
      useClass: AuthInterceptor,
      multi: true,
  bootstrap: [ AppComponent ],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
