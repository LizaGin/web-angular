import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {OperationsService} from '../../../service/operations.service';

@Component({
  selector: 'app-admin-request-payment',
  templateUrl: './admin-request-payment.component.html',
  styleUrls: ['./admin-request-payment.component.css']
})
export class AdminRequestPaymentComponent implements OnInit {

  Requests: Array<any> = new Array<any>();

  constructor(private loginService : LoginService, private operationService : OperationsService) { }

  ngOnInit() {
  }

  getData() {
    this.operationService.getPayment().subscribe(
      (response) => {
        console.log(response);
        this.convertData(response);
      },
      (err) => console.log(err)
    );
  }

  convertData(response) {
    const array: Array<any> = new Array<any>();
    Object.keys(response.body).forEach(key => {
        array.push(response.body[key]);
    });
    if (this.Requests.length !== array.length) {
        this.Requests = new Array<any>();
        this.Requests.push(...array);
    }
}

  logOut() {
    this.loginService.logOut();
  }

}
