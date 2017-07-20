import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class HttpClient {

  subject: Subject<string> = new Subject<string>();
  token: string = '';

  constructor(
    private http: Http
  ) { }

  getTokenActual(): string {
    return this.token;
  }

  getToken(): Subject<string> {
    return this.subject;
  }

  setToken(token: string): void {
    this.subject.next(token);
  }

  createAuthorizationHeader(headers: Headers): RequestOptions {
    /*headers.append('Authorization', `bearer ${localStorage.getItem('token')}`);*/
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  get(url: string): Observable<Response> {
    const headers = new Headers();
    const options = this.createAuthorizationHeader(headers);
    return this.http.get(url, options);
  }

  post(url: string, data: string): Observable<Response> {
    const headers = new Headers();
    const options = this.createAuthorizationHeader(headers);
    return this.http.post(url, data, options);
  }

  delete(url: string): Observable<Response> {
    const headers = new Headers();
    const options = this.createAuthorizationHeader(headers);
    return this.http.delete(url, options);
  }

  put(url: string, data: string): Observable<Response> {
    const headers = new Headers();
    const options = this.createAuthorizationHeader(headers);
    return this.http.put(url, data, options);
  }

}
