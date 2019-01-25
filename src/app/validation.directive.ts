import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appCheckDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true}]
})
export class ValidationDirective implements Validator{

  validate(date: FormControl): ValidationErrors {
    const message = {
      'years': {
        'message': 'The data is incorrect'
      }
    };

    if (date.value !== null) {
      const data = date.value.split('/');
      const month = Number(data[0]);
      const year = Number(data[1]);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      const monthIsValid = 1 <= month && month <= 12;
      const yearIsValid = currentYear <= year && year <= 36;
      const isValid = monthIsValid && yearIsValid || (currentYear === year && month > currentMonth);
      return isValid ? null : message;
    }

    return message;
  }

}
