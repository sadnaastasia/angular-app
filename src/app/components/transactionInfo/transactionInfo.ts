import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  ControlContainer,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { minSumValidator } from '../../validators/minSumValidator';

@Component({
  standalone: true,
  selector: 'transactionInfo',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './transactionInfo.html',
  styleUrl: '../../app.css',
})
export class TransactionInfo implements OnInit {
  parentFormGroup: FormGroup;

  transactionInfo!: FormGroup;

  constructor(private parentControl: ControlContainer) {}

  ngOnInit(): void {
    this.parentFormGroup = this.parentControl.control as FormGroup;
    this.transactionInfo = new FormGroup({
      transactionType: new FormControl(''),
      transactionSum: new FormControl('', [
        Validators.required,
        minSumValidator(0),
      ]),
      currency: new FormControl(''),
      comments: new FormControl('', Validators.maxLength(200)),
    });
    this.parentFormGroup.addControl('transactionInfo', this.transactionInfo);
  }

  get transactionType() {
    return this.transactionInfo.get('transactionType');
  }

  get transactionSum() {
    return this.transactionInfo.get('transactionSum');
  }

  get currency() {
    return this.transactionInfo.get('currency');
  }

  get comments() {
    return this.transactionInfo.get('comments');
  }
}
