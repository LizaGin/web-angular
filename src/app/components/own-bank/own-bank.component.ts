import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-own-bank',
  templateUrl: './own-bank.component.html',
  styleUrls: ['./own-bank.component.css']
})
export class OwnBankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f : NgForm) {

  }
}
