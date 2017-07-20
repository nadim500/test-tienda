import { Component, OnInit } from '@angular/core';
/* import { Router, NavigationEnd } from '@angular/router'; */
/* import { Meta, Title } from '@angular/platform-browser'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    /* private _router: Router,
    private _meta: Meta,
    private _title: Title */
  ) { }

  ngOnInit() {
    /* this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this._title.setTitle('Tienda Virtual | Niux SAC - Innovación Applicada');
            this._meta.updateTag({ name: 'description', content: 'Un pequeño ejemplo de un Ecommerce desarrolado por NIUX' });
            // this._meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this._meta.updateTag({ property: 'og:type', content: 'website' });
            this._meta.updateTag({ property: 'og:title', content: 'Tienda Virtual | Niux SAC - Innovación Applicada' });
            //this._meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe' });
            // this._meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this._meta.updateTag({ property: 'og:description', content: 'Un pequeño ejemplo de un Ecommerce desarrolado por NIUX' });
            this._meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            break;
          case '/conocenos':
            this._title.setTitle('Nosotros | Niux SAC - Innovación Applicada');
            this._meta.updateTag({ name: 'description', content: 'Conocenos NIUX' });
            // this._meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this._meta.updateTag({ property: 'og:type', content: 'website' });
            this._meta.updateTag({ property: 'og:title', content: 'Nosotros | Niux SAC - Innovación Applicada' });
            // this._meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/conocenos' });
            // this._meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this._meta.updateTag({ property: 'og:description', content: 'Conocenos NIUX' });
            this._meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            break;
          case '/contacto':
            this._title.setTitle('Contacto | Niux SAC - Innovación Applicada');
            this._meta.updateTag({ name: 'description', content: 'Contacto NIUX' });
            // this._meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this._meta.updateTag({ property: 'og:type', content: 'website' });
            this._meta.updateTag({ property: 'og:title', content: 'Contacto | Niux SAC - Innovación Applicada' });
            // this._meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/contacto' });
            // this._meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this._meta.updateTag({ property: 'og:description', content: 'Contacto NIUX' });
            this._meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            break;
          case '/login':
            this._title.setTitle('Login | Niux SAC - Innovación Applicada');
            this._meta.updateTag({ name: 'description', content: 'Login NIUX' });
            // this._meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this._meta.updateTag({ property: 'og:type', content: 'website' });
            this._meta.updateTag({ property: 'og:title', content: 'Login | Niux SAC - Innovación Applicada' });
            // this._meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/login' });
            // this._meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this._meta.updateTag({ property: 'og:description', content: 'Login NIUX' });
            this._meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            break;
          case '/register':
            this._title.setTitle('Register | Niux SAC - Innovación Applicada');
            this._meta.updateTag({ name: 'description', content: 'Register NIUX' });
            // this._meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this._meta.updateTag({ property: 'og:type', content: 'website' });
            this._meta.updateTag({ property: 'og:title', content: 'Register | Niux SAC - Innovación Applicada' });
            // this._meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/register' });
            // this._meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this._meta.updateTag({ property: 'og:description', content: 'Register NIUX' });
            this._meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            break;
        }
      }
    }); */
  }
}
