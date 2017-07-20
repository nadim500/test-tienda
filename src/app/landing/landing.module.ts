import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LandingComponent } from './components/landing.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { CartComponent } from './components/cart.component';
import { CheckOutComponent } from './components/check-out.component';
import { OrderReceivedComponent } from './components/order-received.component';

import { HomeProductComponent } from './components/home-product.component';
import { ProductsProductComponent } from './components/products-product.component';

import { LandingRoutingModule } from './landing.routing';

import { ShareButtonsModule } from 'ngx-sharebuttons';
import { NgxPaginationModule } from 'ngx-pagination';
import { Reusables } from '../reusables/reusables';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    ShareButtonsModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    Reusables
  ],
  exports: [],
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckOutComponent,
    OrderReceivedComponent,
    HomeProductComponent,
    ProductsProductComponent
  ],
  providers: []
})
export class LandingModule { }
