import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperationsService } from 'src/app/service/operations.service';

@Component({
  selector: 'app-request-payment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.css']
})
export class RequestPaymentComponent implements OnInit {

  constructor(private operationsServise: OperationsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const payment = f.value;
    this.operationsServise.requestPayment(payment).subscribe(response => {
      if (response.ok) {
        f.resetForm();
      }
    });
  }
}
