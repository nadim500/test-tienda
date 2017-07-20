import {
  Component,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { EmailValidator } from '../../services/validators/validators';

import { Category } from '../../services/class/category.class';
import { Cart } from '../../services/class/cart.class';
import { Client } from '../../services/class/client.class';
import { CategoryService } from '../../services/api/category.service';
import { ContactoService } from '../../services/api/contacto.service';
import { CartService } from '../../services/api/cart.service';
import { ClientService } from '../../services/api/client.service';


import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'landing',
  templateUrl: '../views/landing.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  search: boolean = false;
  top: boolean = false;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let top = document.body.scrollTop;
    if (top > 450) {
      this.top = true;
    } else {
      this.top = false;
    }
  }

  visible: boolean = false;
  visibleError: boolean = false;

  subService: Subscription;

  categories: Category[] = [];
  productosCart: Cart[] = [];
  client: Client;

  formCreate: FormGroup;
  email: AbstractControl;

  constructor(
    private service: CategoryService,
    private cartService: CartService,
    private clientService: ClientService,
    private contactoService: ContactoService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.subService = this.service.get()
      .subscribe((res: Category[]) => {
        this.categories = res;
      });
    this.client = this.clientService.get();
    this.clientService.clientSub
      .subscribe((res: Client) => {
        this.client = res;
      });
    this.productosCart = this.cartService.get();
    this.cartService.productSub
      .subscribe((res: Cart[]) => {
        this.productosCart = res;
      });

  }

  ngOnDestroy(): void {
    this.subService.unsubscribe();
  }

  openSearch(): void {
    this.search = !this.search;
  }

  logout(): void {
    /*this.client = null;*/
    this.router.navigate(['/']);
    this.clientService.logout();
  }

  goTop() {
    let top = document.body.scrollTop;
    let times = 1;
    let range = Math.floor(top / 100);
    let interval = setInterval(() => {
      if (times === 100) {
        document.body.scrollTop = 0;
        clearInterval(interval);
      } else {
        document.body.scrollTop = (top - range * times);
        times++;
      }
    }, 10)
  }

  goToProduct(index: number): void {
    this.router.navigate([`/producto/${this.productosCart[index].id}`]);
    this.scroll();
  }

  goProducts(id: string): void {
    this.router.navigate([`/productos/${id}`]);
    this.scroll();
  }

  scroll(): void {
    document.body.scrollTop = 0;
  }

  submit(): void {
    let newEmail = {
      email: this.formCreate.value.email
    }
    let subForm: Subscription = this.contactoService.subscribirEmail(newEmail)
      .subscribe((res: Client) => {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 5000)
        subForm.unsubscribe();
        this.createForm();
      }, (err: any) => {
        this.visibleError = true;
        this.createForm();
        setTimeout(() => {
          this.visibleError = false;
        }, 5000)
        subForm.unsubscribe();
      });
  }

  createForm(): void {
    this.formCreate = this.fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
    this.email = this.formCreate.controls['email'];
  }

}
