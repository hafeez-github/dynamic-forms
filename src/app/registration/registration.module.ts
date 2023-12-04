import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form/main-form.component';
import { FormComponentGeneratorComponent } from './form-component-generator/form-component-generator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainFormComponent,
    FormComponentGeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MainFormComponent
  ]
})
export class RegistrationModule { }
