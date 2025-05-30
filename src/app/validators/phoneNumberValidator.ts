import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function phoneNumberValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumberValidator = nameRe.test(control.value);
    return phoneNumberValidator
      ? null
      : { phoneNumberValidator: { value: control.value } };
  };
}
