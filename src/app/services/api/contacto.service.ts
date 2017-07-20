import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Contacto } from '../class/contacto.class';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class ContactoService {

  private url: string = CONFIGPROD.url;

  constructor(
    private http: HttpClient
  ) { }

  getOne(): Observable<Contacto> {
    let query: string = `${this.url}/contacto`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return new Contacto(data)
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  sendEmail(obj: any): Observable<any> {
    let query: string = `${this.url}/contact-email`;
    let data = JSON.stringify({
      data: obj
    })
    return this.http.post(query, data)
      .map((res: Response) => {
        const data = res.json().data;
        return data;
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  subscribirEmail(obj: any): Observable<any> {
    let query: string = `${this.url}/register-email`;
    let data = JSON.stringify({
      data: obj
    })
    return this.http.post(query, data)
      .map((res: Response) => {
        const data = res.json().data;
        return data;
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

}
