import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MatchValidator, EmailValidator } from '../../services/validators/validators';

import { Client } from '../../services/class/client.class';
import { ClientService } from '../../services/api/client.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'register',
  templateUrl: '../views/register.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class RegisterComponent implements OnInit {

  cargando: boolean = false;
  visible: boolean = false;
  visibleError: boolean = false;

  formCreate: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  firstName: AbstractControl;
  lastName: AbstractControl;
  phone: AbstractControl;
  password: AbstractControl;
  repeatPwd: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private service: ClientService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  submit(): void {
    this.cargando = true;
    const newClient = {
      username: this.formCreate.value.username,
      email: this.formCreate.value.email,
      firstName: this.formCreate.value.firstName,
      lastName: this.formCreate.value.lastName,
      phone: this.formCreate.value.phone,
      password: this.formCreate.value.password,
    }
    let subForm: Subscription = this.service.create(newClient)
      .subscribe((res: Client) => {
        this.cargando = false;
        this.visible = true;
        this.createForm();
      }, (err: any) => {
        this.visibleError = true;
        this.createForm();
        setTimeout(() => {
          this.visibleError = false;
        }, 5000)
      });
  }

  createForm(): void {
    this.formCreate = this.fb.group({
      'username': ['', Validators.required, EmailValidator.asyncValid(this.service, 'username')],
      'email': ['', Validators.compose([Validators.required, EmailValidator.isValid]), EmailValidator.asyncValid(this.service, 'email')],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'phone': ['', Validators.required],
      'password': ['', Validators.required],
      'repeatPwd': ['', Validators.required]
    }, { validator: MatchValidator.equalPassword('password', 'repeatPwd') });
    this.username = this.formCreate.controls['username'];
    this.email = this.formCreate.controls['email'];
    this.firstName = this.formCreate.controls['firstName'];
    this.lastName = this.formCreate.controls['lastName'];
    this.phone = this.formCreate.controls['phone'];
    this.password = this.formCreate.controls['password'];
    this.repeatPwd = this.formCreate.controls['repeatPwd'];
  }

  scroll(): void {
    document.body.scrollTop = 0;
  }

}
