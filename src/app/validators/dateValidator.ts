import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = !control.value || control.value.split('.');
    const date = Number(new Date(formatDate(value)).getTime());
    const today = Date.now();
    const diff = (today - date) / (365.3 * 24 * 60 * 60 * 1000);
    return diff < 18 ? { dateValidator: { value: control.value } } : null;
  };
}

function formatDate(dateArray: string) {
  return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
}
