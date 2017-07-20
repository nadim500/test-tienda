import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { EmailValidator } from '../../services/validators/validators';
import { Meta, Title } from '@angular/platform-browser';

import { Contacto } from '../../services/class/contacto.class';
import { ContactoService } from '../../services/api/contacto.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'contact',
  templateUrl: '../views/contact.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  subService: Subscription;
  visible: boolean = false;
  visibleError: boolean = false;

  contacto: Contacto;

  formCreate: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  message: AbstractControl;

  constructor(
    private service: ContactoService,
    private fb: FormBuilder,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Contacto | Niux SAC - Innovación Applicada');
    meta.addTags([
      { name: 'description', content: 'Contacto NIUX' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Contacto | Niux SAC - Innovación Applicada' },
      { property: 'og:description', content: 'Contacto NIUX' },
      { property: 'og:site_name', content: 'Niux' }
    ])
  }

  ngOnInit(): void {
    this.createForm();
    this.subService = this.service.getOne()
      .subscribe((res: Contacto) => {
        this.contacto = res;
      });
  }

  submit(): void {
    let newEmail = {
      name: this.formCreate.value.name,
      email: this.formCreate.value.email,
      message: this.formCreate.value.message
    }
    let subForm: Subscription = this.service.sendEmail(newEmail)
      .subscribe((res: any) => {
        this.visible = true;
        this.createForm();
        setTimeout(() => {
          this.visible = false;
        }, 5000)
      }, (err: any) => {
        this.visibleError = true;
        this.createForm();
        setTimeout(() => {
          this.visibleError = false;
        }, 5000)
      });
  }

  ngOnDestroy(): void {
    this.subService.unsubscribe();
  }

  createForm(): void {
    this.formCreate = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      'message': ['', Validators.required]
    });
    this.name = this.formCreate.controls['name'];
    this.email = this.formCreate.controls['email'];
    this.message = this.formCreate.controls['message'];
  }

}
