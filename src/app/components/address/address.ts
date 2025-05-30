import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  ControlContainer,
  FormBuilder,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { lengthValidator } from '../../validators/lengthValidator';
import countries from '../../data/countries.json';

@Component({
  standalone: true,
  selector: 'address',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './address.html',
  styleUrl: '../../app.css',
})
export class Address implements OnInit {
  countries: any[] = countries;

  parentFormGroup: FormGroup;

  address!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parentControl: ControlContainer
  ) {}

  ngOnInit(): void {
    this.parentFormGroup = this.parentControl.control as FormGroup;
    this.address = this.fb.group({
      country: ['', Validators.required],
      region: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      house: ['', [Validators.required, Validators.minLength(1)]],
      apartment: ['', Validators.pattern('^[0-9]+$')],
      postalCode: ['', [Validators.required, lengthValidator(6)]],
    });
    this.parentFormGroup.addControl('address', this.address);
  }

  get country() {
    return this.address.get('country');
  }

  get region() {
    return this.address.get('region');
  }

  get city() {
    return this.address.get('city');
  }

  get street() {
    return this.address.get('street');
  }

  get house() {
    return this.address.get('house');
  }

  get apartment() {
    return this.address.get('apartment');
  }

  get postalCode() {
    return this.address.get('postalCode');
  }
}
