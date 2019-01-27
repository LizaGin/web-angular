import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Request-Methods': 'GET,POST,PATCH'
  });

  constructor(private http: HttpClient) { }

  storeCardPayment(payment) {
    return this.http.post('http://localhost:4300/cardPayment', payment,
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  requestPayment(payment) {
    return this.http.post('http://localhost:4300/requestPayment', payment,
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  filePayment(payment) {
    return this.http.post('http://localhost:4300/filePayment', payment,
    { observe: 'response', responseType: 'text', headers: this.headers });
  }

  getFilePayment() {
    return this.http.get('http://localhost:4300/filePayment',
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  getCardPayment() {
    return this.http.get('http://localhost:4300/cardPayment',
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  getPayment() {
    return this.http.get('http://localhost:4300/requestPayment',
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  changeSecurity(id, secure) {
    return this.http.patch('http://localhost:4300/cardPayment/' + `${id}`, { secure },
        {observe: 'response', responseType: 'json', headers: this.headers});
  }
}
