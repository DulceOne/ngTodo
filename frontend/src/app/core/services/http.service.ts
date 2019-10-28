import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import  { environment } from "../../../environments/environment";
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly prefix = environment.prefix;
  readonly host = environment.host;

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token') || 'x-access-token',
      'Content-Type':  'application/json',
    })
  };

  post<T>(url, body) {
    return this.http.post(this.getFullUrl(url), body, this.httpOptions).pipe(
      catchError((err) => throwError(err))
    ) as Observable<T>;
  }

  get<T>(url) {
    return this.http.get(this.getFullUrl(url)).pipe(
      catchError((err) => throwError(err))
    ) as Observable<T>
  }

  delete<T>(url) {
    return this.http.delete(this.getFullUrl(url)).pipe(
      catchError((err) => throwError(err))
    ) as Observable<T>
  }

  getFullUrl(url) {
    return this.host+this.prefix+url;
  }
}
