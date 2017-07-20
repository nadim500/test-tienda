import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CartService } from '../api/cart.service';
@Injectable()
export class CartGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: CartService
  ) { }

  canActivate(): boolean {
    if (this.service.get().length > 0) {
      document.body.scrollTop = 0;
      return true;
    } else {
      document.body.scrollTop = 0;
      this.router.navigate(['/']);
      return false;
    }
  }
}
