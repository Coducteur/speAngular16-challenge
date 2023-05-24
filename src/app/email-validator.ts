import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valid = control.value.includes('@') && control.value.includes('.');

  const errors = {
    email: {
      rules: "n'est pas au format email",
    },
  };
  return !valid ? errors : null;
}
