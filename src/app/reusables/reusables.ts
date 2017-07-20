import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPipe } from './pipes/product-price.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductPipe,
    SafePipe
  ],
  exports: [
    ProductPipe,
    SafePipe
  ]
})
export class Reusables { }
