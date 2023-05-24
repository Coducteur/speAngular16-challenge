import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const passRegex = RegExp('(?=.*[A-Z])');
  const valid = passRegex.test(control.value);

  const errors = {
    password: {
      rules:
        'doit contenir au moins 1 Majuscule',
    },
  };
  return !valid ? errors : null;
}
