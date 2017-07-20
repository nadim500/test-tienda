import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';

import { Cart } from '../../services/class/cart.class';
import { CartService } from '../../services/api/cart.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'cart',
  templateUrl: '../views/cart.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class CartComponent implements OnInit {

  cartProductos: Cart[] = [];

  constructor(
    private router: Router,
    public service: CartService
  ) { }

  ngOnInit(): void {
    this.cartProductos = this.service.get();
  }

  goToProduct(index: number): void {
    this.router.navigate([`/producto/${this.cartProductos[index].id}`]);
    document.body.scrollTop = 0;
  }

  goCheckOut(): void {
    this.router.navigate([`/checkout`]);
    document.body.scrollTop = 0;
  }

  remove(index: number): void {
    this.service.removeToCart(index);
  }

  minus(index: number): void {
    this.service.minusCart(index);
  }

  plus(index: number): void {
    this.service.plusCart(index);
  }

}
