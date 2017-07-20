import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Image } from '../class/image.class';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class ImageService {

  private url: string = CONFIGPROD.url;

  constructor(
    private http: HttpClient
  ) { }

  getOne(): Observable<Image> {
    let query: string = `${this.url}/image`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json().data;
        return new Image(data)
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
