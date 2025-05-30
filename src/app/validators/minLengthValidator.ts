import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function minLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minLengthValidator = String(control.value).length;
    return minLengthValidator >= length
      ? null
      : { minLengthValidator: { value: control.value } };
  };
}
