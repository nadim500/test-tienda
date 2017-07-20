import { Injectable } from '@angular/core';

import { Product } from '../class/product.class';
import { Cart } from '../class/cart.class';

import { Subject } from 'rxjs/Rx';

@Injectable()
export class CartService {

  productos: Cart[] = [];
  productSub: Subject<Cart[]> = new Subject<Cart[]>();

  constructor() {
    let prod = localStorage.getItem('cart');
    if (prod) {
      this.productos = JSON.parse(prod);
    }
  }

  addToCart(product: Product): void {
    let newCart = new Cart(product);
    let buff = this.productos.find((obj) => product.id === obj.id);
    if (!buff) {
      this.productos.push(newCart);
      localStorage.setItem('cart', JSON.stringify(this.productos));
    }
  }

  removeToCart(index: number): void {
    this.productos.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.productos));
  }

  plusCart(index: number): void {
    this.productos[index].cantidad++;
    localStorage.setItem('cart', JSON.stringify(this.productos));
  }

  minusCart(index: number): void {
    if (this.productos[index].cantidad > 1) {
      this.productos[index].cantidad--;
      localStorage.setItem('cart', JSON.stringify(this.productos));
    }
  }

  getTotal(): number {
    let total = 0;
    this.productos.forEach((obj) => {
      total += (obj.cantidad * obj.priceNow);
    });
    return total;
  }

  checkOut(): void {
    this.productos = [];
    this.productSub.next(this.productos);
    localStorage.setItem('cart', JSON.stringify(this.productos));
  }

  get(): Cart[] {
    return this.productos;
  }

}
