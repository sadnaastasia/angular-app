import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function lengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRe = /^[0-9]+$/;
    const lengthValidator = String(control.value).length;
    return lengthValidator === length && nameRe.test(control.value)
      ? null
      : { lengthValidator: { value: control.value } };
  };
}
