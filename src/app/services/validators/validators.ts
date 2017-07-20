import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ClientService } from '../../services/api/client.service';

export class EmailValidator {
  static isValid(control: FormControl): { [s: string]: boolean } {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { 'invalidEmail': true };
    }
    return null;
  }

  static asyncValid(service: ClientService, type: string) {
    return (control: FormControl) => new Promise((resolve, reject) => {
      service.check(control.value, type)
        .subscribe((res: boolean) => {
          if (!res) {
            resolve(null);
          } else {
            resolve({ 'invalidAsync': true });
          }
        }, (err: any) => {
          console.log('err in asyncValid: ', err);
          resolve({ 'invalidAsync': true });
        });
    });
  }

}

export class MatchValidator {
  static equalPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [s: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
}

