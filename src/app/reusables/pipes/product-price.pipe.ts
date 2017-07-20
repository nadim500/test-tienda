import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fixedTwo' })
export class ProductPipe implements PipeTransform {
  transform(price: number) {
    return price.toFixed(2);
  }
}
