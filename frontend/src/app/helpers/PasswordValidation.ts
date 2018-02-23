import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('passwordConfirmation').value; // to get value in input tag
        if (password !== confirmPassword) {
            // console.log('false');
            AC.get('passwordConfirmation').setErrors({MatchPassword: true});
        } else {
            // console.log('true');
            return null;
        }
    }
}
