import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HasRoleDirective} from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HasRoleDirective
  ],
  exports: [
    HasRoleDirective
  ]
})
export class SharedModule { }
