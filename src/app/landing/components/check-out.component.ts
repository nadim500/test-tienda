import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cart } from '../../services/class/cart.class';
import { CartService } from '../../services/api/cart.service';
import { BillService } from '../../services/api/bill.service';
import { ClientService } from '../../services/api/client.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'check-out',
  templateUrl: '../views/check-out.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class CheckOutComponent implements OnInit {

  cartProductos: Cart[] = [];
  invalid: boolean = false;
  textError: string = '';
  cargando: boolean = false;

  formCreate: FormGroup;
  country: AbstractControl;
  city: AbstractControl;
  district: AbstractControl;
  address: AbstractControl;
  codigo: AbstractControl;
  note: AbstractControl;

  constructor(
    public service: CartService,
    private billService: BillService,
    private clientService: ClientService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.cartProductos = this.service.get();
  }

  submit(): void {
    if (!this.formCreate.valid) {
      this.invalid = true;
      let top = document.body.scrollTop;
      let times = 1;
      let range = Math.floor(top / 50);
      this.textError = 'Complete el formulario ';
      let interval = setInterval(() => {
        if (times === 100) {
          document.body.scrollTop = 0;
          clearInterval(interval);
        } else {
          document.body.scrollTop = (top - range * times);
          times++;
        }
      }, 10);
      setTimeout(() => {
        this.invalid = false;
      }, 5000)
    } else {
      /*falta clientId*/
      this.cargando = true;
      const bill = {
        clientId: this.clientService.get().id,
        total: this.service.getTotal(),
        productos: this.cartProductos,
        country: this.formCreate.value.country,
        city: this.formCreate.value.city,
        district: this.formCreate.value.district,
        address: this.formCreate.value.address,
        codigo: this.formCreate.value.codigo,
        note: this.formCreate.value.note
      }
      let formSub = this.billService.create(bill)
        .subscribe((res: any) => {
          this.service.checkOut();
          this.cargando = false;
          formSub.unsubscribe();
          this.router.navigate([`/order-received/${res.id}`]);
        }, (err: any) => {
          this.cargando = false;
          this.invalid = true;
          let top = document.body.scrollTop;
          let times = 1;
          let range = Math.floor(top / 50);
          this.textError = err;
          let interval = setInterval(() => {
            if (times === 100) {
              document.body.scrollTop = 0;
              clearInterval(interval);
            } else {
              document.body.scrollTop = (top - range * times);
              times++;
            }
          }, 10);
          formSub.unsubscribe();
          this.createForm();
          setTimeout(() => {
            this.invalid = false;
          }, 5000)
        });
    }
  }

  createForm(): void {
    this.formCreate = this.fb.group({
      'country': ['', Validators.required],
      'city': ['', Validators.required],
      'district': ['', Validators.required],
      'address': ['', Validators.required],
      'codigo': ['', Validators.required],
      'note': ['']
    });
    this.country = this.formCreate.controls['country'];
    this.city = this.formCreate.controls['city'];
    this.district = this.formCreate.controls['district'];
    this.address = this.formCreate.controls['address'];
    this.codigo = this.formCreate.controls['codigo'];
    this.note = this.formCreate.controls['note'];
  }

}
