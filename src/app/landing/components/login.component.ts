import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from '../../services/class/client.class';
import { ClientService } from '../../services/api/client.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'login',
  templateUrl: '../views/login.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class LoginComponent implements OnInit {

  visible: boolean = false;
  textError: string = '';

  formCreate: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(
    private service: ClientService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  submit(): void {
    const login = {
      email: this.formCreate.value.email,
      password: this.formCreate.value.password
    }
    let subForm: Subscription = this.service.login(login)
      .subscribe((res: Client) => {
        subForm.unsubscribe();
        this.service.set(res);
        this.router.navigate(['/']);
      }, (err: any) => {
        this.visible = true;
        this.textError = err;
        setTimeout(() => {
          this.visible = false;
          this.textError = '';
        }, 5000)
      });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formCreate = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.email = this.formCreate.controls['email'];
    this.password = this.formCreate.controls['password'];
  }

}
