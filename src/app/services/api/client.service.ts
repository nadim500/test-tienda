import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';

import { Client } from '../class/client.class';

import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIGDEVELOP, CONFIGPROD } from '../config/config.constant';

@Injectable()
export class ClientService {

  private url: string = CONFIGPROD.url;

  client: Client;
  clientSub: Subject<Client> = new Subject<Client>();

  constructor(
    private http: HttpClient
  ) {
    let client = localStorage.getItem('client');
    if (client) {
      this.client = JSON.parse(client);
    }
  }

  check(search: string, type: string): Observable<boolean> {
    let query = `${this.url}/check/client`;
    let data = JSON.stringify({
      data: {
        search: search,
        type: type
      }
    });
    return this.http.post(query, data)
      .map((res: Response) => {
        let data1 = res.json().data;
        return data1.valid;
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  create(obj: any): Observable<Client> {
    const query = `${this.url}/client`;
    const data = JSON.stringify({
      data: obj
    });
    return this.http.post(query, data)
      .map((res: Response) => {
        const data1 = res.json().data;
        return new Client(data1);
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  login(obj: any): Observable<Client> {
    const query = `${this.url}/login/client`;
    const data = JSON.stringify({
      data: obj
    });
    return this.http.post(query, data)
      .map((res: Response) => {
        const data1 = res.json().data;
        return new Client(data1);
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json().data && err.json().data.msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  loggedIn(): boolean {
    if (this.client) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.client = null;
    this.clientSub.next(null);
    localStorage.removeItem('client');
  }

  get(): Client {
    return this.client;
  }

  set(newClient: Client): void {
    this.client = newClient;
    this.clientSub.next(newClient);
    localStorage.setItem('client', JSON.stringify(this.client));
  }

}
