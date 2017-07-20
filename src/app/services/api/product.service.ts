import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from '../class/product.class';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class ProductService {

  private url: string = CONFIGPROD.url;

  constructor(
    private http: HttpClient
  ) { }

  get(order?: string): Observable<Product[]> {
    let query: string;
    if (!order) {
      query = `${this.url}/product`;
    } else {
      query = `${this.url}/product?order=${order}`;
    }
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return data.map((obj1: any) => new Product(obj1));
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  getById(id: string): Observable<Product> {
    let query: string = `${this.url}/product/${id}`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return new Product(data);
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  getByCategory(id: string): Observable<Product[]> {
    let query: string = `${this.url}/product/category/${id}`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return data.map((obj1: any) => new Product(obj1));
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  getByRelated(id: string): Observable<Product[]> {
    let query: string = `${this.url}/product/related/${id}`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return data.map((obj1: any) => new Product(obj1));
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  getBySearch(text: string): Observable<Product[]> {
    let query: string = `${this.url}/product/search`;
    let data = JSON.stringify({
      data: {
        text: text
      }
    });
    return this.http.post(query, data)
      .map((res: Response) => {
        const data = res.json().data;
        return data.map((obj1: any) => new Product(obj1));
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
