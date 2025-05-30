import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  ControlContainer,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { lengthValidator } from '../../validators/lengthValidator';
import { minLengthValidator } from '../../validators/minLengthValidator';

@Component({
  standalone: true,
  selector: 'bankDetails',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './bankDetails.html',
  styleUrl: '../../app.css',
})
export class BankDetails implements OnInit {
  parentFormGroup: FormGroup;

  bankDetails!: FormGroup;

  constructor(private parentControl: ControlContainer) {}

  ngOnInit(): void {
    this.parentFormGroup = this.parentControl.control as FormGroup;
    this.bankDetails = new FormGroup({
      accountNumber: new FormControl('', [
        Validators.required,
        lengthValidator(20),
      ]),
      bic: new FormControl('', [Validators.required, lengthValidator(9)]),
      bankName: new FormControl('', [
        Validators.required,
        minLengthValidator(3),
      ]),
      correspondentAccount: new FormControl('', [
        Validators.required,
        lengthValidator(20),
      ]),
    });
    this.parentFormGroup.addControl('bankDetails', this.bankDetails);
  }

  get accountNumber() {
    return this.bankDetails.get('accountNumber');
  }

  get bic() {
    return this.bankDetails.get('bic');
  }

  get bankName() {
    return this.bankDetails.get('bankName');
  }

  get correspondentAccount() {
    return this.bankDetails.get('correspondentAccount');
  }
}
