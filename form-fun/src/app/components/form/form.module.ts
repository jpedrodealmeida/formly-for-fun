import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { FormComponent } from './form.component';




@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
