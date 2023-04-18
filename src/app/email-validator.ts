import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'Votre email n\'est pas valide doit contenir un @'
        }
    };

    return !valid ? errors : null;
}