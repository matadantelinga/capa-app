import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent {
  @Input() control: any;

  formatError(errorKey, data) {
    // if (errorKey.indexOf('may not be null')) return 'This field is required';
    if (errorKey.indexOf(' ') >= 0) return errorKey; // If errorKey is a string with at least a space.
    switch (errorKey) {
      case 'required':
        return 'This field is required';
      case 'numberOnly':
        return 'Only Numbers are allowed';
      case 'minlength':
        return `At least ${data.requiredLength} characters required`;
      case 'maxlength':
        return `Maximum of ${data.requiredLength} characters required`;
      case 'email':
        return 'Please enter a valid email';
      default:
        return 'Please enter valid email or phone number';
    }
  }

  getErrorMessages() {
    let controlErrors = this.control.errors;
    let errorMsgs = [];
    for (let key in controlErrors) {
      let val = controlErrors[key];
      errorMsgs.push(this.formatError(key, val));
    }
    return errorMsgs;
  }
}
