import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { CategoryService } from '../services/api/category.service';
import { ProductService } from '../services/api/product.service';
import { CartService } from '../services/api/cart.service';
import { BillService } from '../services/api/bill.service';
import { ClientService } from '../services/api/client.service';
import { ImageService } from '../services/api/image.service';
import { ConocerService } from '../services/api/conocer.service';
import { ContactoService } from '../services/api/contacto.service';
import { HttpClient } from '../services/api/http-client.service';

import { LoginGuard } from '../services/guard/login-guard.service'
import { CheckOutGuard } from '../services/guard/checkout-guard.service'
import { CartGuard } from '../services/guard/cart-guard.service'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'conocenos',
        component: AboutComponent
      },
      {
        path: 'contacto',
        component: ContactComponent
      },
      {
        path: 'productos/:id',
        component: ProductsComponent
      },
      {
        path: 'producto/:id',
        component: ProductComponent
      }, {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      }, {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuard]
      }, {
        path: 'cart',
        component: CartComponent,
        canActivate: [CartGuard]
      }, {
        path: 'checkout',
        component: CheckOutComponent,
        canActivate: [CheckOutGuard, CartGuard]
      }, {
        path: 'order-received/:id',
        component: OrderReceivedComponent,
        canActivate: [CheckOutGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HttpClient,
    CategoryService,
    ProductService,
    CartService,
    BillService,
    ClientService,
    ImageService,
    ConocerService,
    ContactoService,
    LoginGuard,
    CheckOutGuard,
    CartGuard
  ]
})
export class LandingRoutingModule { }
