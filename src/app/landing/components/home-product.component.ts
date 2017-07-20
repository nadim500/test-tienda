import {
  Component,
  HostBinding,
  OnInit,
  Input
} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../services/class/product.class';
import { CartService } from '../../services/api/cart.service';

@Component({
  selector: 'home-product',
  templateUrl: '../views/home-product.component.html',
  styleUrls: ['../css/home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  @HostBinding('class') clases = 'product col-md-3 col-sm-6 col-xs-12';
  @Input() product: Product;
  inCart: boolean = false;
  constructor(
    private router: Router,
    private service: CartService
  ) { }

  ngOnInit(): void {
    let productos = this.service.get();
    let buff = productos.find((obj) => this.product.id === obj.id);
    if (buff) {
      this.inCart = true;
    }
  }

  goToProduct() {
    this.router.navigate([`/producto/${this.product.id}`])
    document.body.scrollTop = 0;
  }

  addCart(): void {
    if (!this.inCart) {
      this.service.addToCart(this.product);
      this.inCart = true;
    }
  }
}
