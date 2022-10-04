import { AbstractControl } from '@angular/forms';

export function validateEmailPhone(control: AbstractControl) {
  let regex = new RegExp(
    '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{12})+$'
  );
  if (control.value) {
    if (!regex.test(control.value)) {
      return { invalidInput: true };
    }
    return null;
  }
}
