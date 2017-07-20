import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Category } from '../class/category.class';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class CategoryService {

  private url: string = CONFIGPROD.url;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Category[]> {
    let query: string = `${this.url}/category`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return data.map((obj1: any) => new Category(obj1));
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
