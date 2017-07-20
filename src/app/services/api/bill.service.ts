import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';

import { Bill } from '../class/bill.class';

import 'rxjs/add/operator/map';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class BillService {

  private url: string = CONFIGPROD.url;

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<Bill> {
    let query: string = `${this.url}/bill/${id}`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        console.log('data :', data);
        return new Bill(data);
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  create(obj: any): Observable<any> {
    const query = `${this.url}/bill`;
    const data = JSON.stringify({
      data: obj
    });
    return this.http.post(query, data)
      .map((res: Response) => {
        const data1 = res.json().data;
        return data1;
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
