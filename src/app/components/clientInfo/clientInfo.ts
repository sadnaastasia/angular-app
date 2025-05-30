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
import { dateValidator } from '../../validators/dateValidator';
import { phoneNumberValidator } from '../../validators/phoneNumberValidator';
import { lengthValidator } from '../../validators/lengthValidator';

@Component({
  standalone: true,
  selector: 'clientInfo',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './clientInfo.html',
  styleUrl: '../../app.css',
})
export class ClientInfo implements OnInit {
  parentFormGroup: FormGroup;

  clientInfo!: FormGroup;

  constructor(private parentControl: ControlContainer) {}

  ngOnInit(): void {
    this.parentFormGroup = this.parentControl.control as FormGroup;
    this.clientInfo = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      middleName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      gender: new FormControl(''),
      birthDate: new FormControl('', [Validators.required, dateValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('+7', [
        Validators.required,
        phoneNumberValidator(/^([+7]{2}[0-9]{10})?$/),
      ]),
      passport: new FormControl('', [Validators.required, lengthValidator(10)]),
    });
    this.parentFormGroup.addControl('clientInfo', this.clientInfo);
  }

  get firstName() {
    return this.clientInfo.get('firstName');
  }

  get lastName() {
    return this.clientInfo.get('lastName');
  }

  get middleName() {
    return this.clientInfo.get('middleName');
  }

  get gender() {
    return this.clientInfo.get('gender');
  }

  get birthDate() {
    return this.clientInfo.get('birthDate');
  }

  get email() {
    return this.clientInfo.get('email');
  }

  get phone() {
    return this.clientInfo.get('phone');
  }

  get passport() {
    return this.clientInfo.get('passport');
  }
}
