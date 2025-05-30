import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function minSumValidator(sum: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minSumValidator = control.value;
    return minSumValidator > sum
      ? null
      : { minSumValidator: { value: control.value } };
  };
}
