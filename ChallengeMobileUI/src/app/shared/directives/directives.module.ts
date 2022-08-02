import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniqueValidatorDirective} from "./unique-validator.directive";



@NgModule({
  declarations: [UniqueValidatorDirective],
  imports: [
    CommonModule,

  ],
  exports: [UniqueValidatorDirective]
})
export class DirectivesModule { }
