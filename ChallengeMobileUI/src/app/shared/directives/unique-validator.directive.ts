import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {UserService} from "../services/user.service";


@Directive({
  selector: '[appUniqueValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true}]
})
export class UniqueValidatorDirective implements AsyncValidator {
  @Input() appUniqueValidator: string;
  @Input() appUniqueValidatorExcludeValue: string;
  constructor(private userService: UserService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> | null {

    // eslint-disable-next-line eqeqeq
    if(!control.value || this.appUniqueValidatorExcludeValue == control.value){
      return of(null);
    }

    switch(this.appUniqueValidator){
      case 'email': {
        //console.log('Email check with:',control.value);
        return this.userService.checkEmail(control.value).pipe(
          map(exists => exists ? {notUnique: 'Email already in use.'} : null)
        );
      }
      case 'mobileNumber': {
        //console.log('mobile check with:', control.value);
        return this.userService.checkMobileNumber(control.value).pipe(
          map(exists => exists ? {notUnique: 'Mobile Number already in use.'} : null)
        );
      }

    }
  }
}
