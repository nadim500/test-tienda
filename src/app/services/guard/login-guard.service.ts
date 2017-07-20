import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ClientService } from '../api/client.service';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: ClientService
  ) { }

  canActivate(): boolean {
    if (this.service.loggedIn()) {
      document.body.scrollTop = 0;
      this.router.navigate(['/']);
      return false;
    } else {
      document.body.scrollTop = 0;
      return true;
    }
  }
}
