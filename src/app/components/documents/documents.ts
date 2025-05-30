import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormArray,
  ControlContainer,
} from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { lengthValidator } from '../../validators/lengthValidator';

@Component({
  standalone: true,
  selector: 'documents',
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './documents.html',
  styleUrl: '../../app.css',
})
export class Documents implements OnInit {
  parentFormGroup: FormGroup;

  dynamicForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parentControl: ControlContainer
  ) {}

  ngOnInit(): void {
    this.parentFormGroup = this.parentControl.control as FormGroup;
    this.dynamicForm = this.fb.group({
      fields: this.fb.array([this.createFieldGroup()], [Validators.required]),
    });
    this.parentFormGroup.addControl('dynamicForm', this.dynamicForm);
  }

  createFieldGroup() {
    return this.fb.group({
      documentType: new FormControl(''),
      documentNumber: new FormControl('', [Validators.required]),
      issueDate: new FormControl('', [Validators.required]),
    });
  }

  get fields(): FormArray {
    return this.dynamicForm.get('fields') as FormArray;
  }

  addField() {
    let field = this.createFieldGroup();
    this.fields.push(field);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  onChange(index: number) {
    const documentTypeControl =
      this.fields.controls[index].get('documentType').value;
    let length;
    if (documentTypeControl === 'passport') {
      length = 10;
    } else if (documentTypeControl === 'INT') {
      length = 11;
    } else {
      length = 12;
    }
    const documentNumberControl =
      this.fields.controls[index].get('documentNumber');

    documentNumberControl?.setValidators([
      Validators.required,
      lengthValidator(length),
    ]);
    documentNumberControl?.updateValueAndValidity();
  }
}
