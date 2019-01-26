import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class OperationsService {
    headersToSend: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headersToSend = new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Access-Control-Request-Methods': 'GET, POST, OPTIONS, PATCH'
            }
        );
    }

    webAuth(data) {
        return this.http.post('http://localhost:4300/login', data,
            {observe: 'response', responseType: 'json', headers: this.headersToSend});
    }

    checkCookies(cookie: string) {
        const headersToSend = new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Access-Control-Request-Methods': 'GET, POST, OPTIONS, PATCH',
                'X-Authorization': cookie
            }
        );
        return this.http.get('http://localhost:4500/checkCookies',
            {observe: 'response', responseType: 'json', headers: headersToSend});
    }

    getCSRFToken(data) {
        return this.http.post('http://localhost:4500/getCSRFToken', data,
            {observe: 'response', responseType: 'json', headers: this.headersToSend});
    }

    storePaymentsByCard(data) {
        return this.http.post('http://localhost:4500/storeCardPayments', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }

    storePaymentsRequest(data) {
        return this.http.post('http://localhost:4500/storePaymentsRequests', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }

    getPaymentsToDownload(data) {
        return this.http.post('http://localhost:4500/getPaymentsToDownload', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }

    getPaymentsRequests(): Observable<any> {
        return this.http.get('http://localhost:4500/getPaymentsRequests',
            {observe: 'response', responseType: 'json', headers: this.headersToSend});
    }

    getPaymentsPay(): Observable<any> {
        return this.http.get('http://localhost:4500/getPaymentsPay',
            {observe: 'response', responseType: 'json'});
    }

    changeSecurity(id) {
        return this.http.patch('http://localhost:4500/changeSecurity', {'id': id},
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }
}
