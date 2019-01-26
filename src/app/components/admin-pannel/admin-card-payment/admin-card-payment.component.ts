import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-admin-card-payment',
  templateUrl: './admin-card-payment.component.html',
  styleUrls: ['./admin-card-payment.component.css']
})
export class AdminCardPaymentComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

}
