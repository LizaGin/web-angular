import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {OperationsService} from '../../service/operations.service'

@Component({
  selector: 'app-own-bank',
  templateUrl: './own-bank.component.html',
  styleUrls: ['./own-bank.component.css']
})
export class OwnBankComponent implements OnInit {

  constructor(private operationsService : OperationsService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm) {
    const payment = f.value;
    this.operationsService.storeCardPayment(payment).subscribe(response => {
      if (response.ok) {
        f.resetForm();
      }
    });
  }
}
