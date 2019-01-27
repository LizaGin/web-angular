import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperationsService } from 'src/app/service/operations.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-another-bank',
  templateUrl: './another-bank.component.html',
  styleUrls: ['./another-bank.component.css']
})
export class AnotherBankComponent implements OnInit {

  constructor(private operationsService : OperationsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.operationsService.filePayment(f.value)
      .subscribe(response => {
        if (response.ok) {
          const blob = new Blob([response.body], { type: 'text/plain;charset=utf-8' });
          saveAs(blob, `Платёжка-${Date.now().toLocaleString()}.txt`);
          f.resetForm();
        }
      });
  }
}
