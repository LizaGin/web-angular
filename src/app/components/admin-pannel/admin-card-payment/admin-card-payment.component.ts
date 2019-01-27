import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {OperationsService} from '../../../service/operations.service';

@Component({
  selector: 'app-admin-card-payment',
  templateUrl: './admin-card-payment.component.html',
  styleUrls: ['./admin-card-payment.component.css']
})
export class AdminCardPaymentComponent implements OnInit {

  Requests: Array<any> = new Array<any>();

  constructor(private loginService : LoginService, private operationService : OperationsService) { }

  ngOnInit() {
  }

  getData() {
    this.operationService.getCardPayment().subscribe(
      (response) => {
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

  changeSecure(id, index) {
    this.operationService.changeSecurity(id, this.Requests[index].secure)
        .subscribe(
            (response) => {
                if (response.ok) {
                    this.Requests[index].secure = !this.Requests[index].secure;
                  }
            },
            (err) =>  console.log(err)
        );
}
}

