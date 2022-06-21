import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Form } from 'src/app/models/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() set setFormFields(value: Form[]){
    this.formFields = value
    this.buildForm(value)
  }
  
  public formFields!: Form[] 

  formGroup!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  private buildForm(fields: Form[]) {
    this.formGroup = this.fb.group({})
    fields.forEach(field => {
      this.formGroup.addControl(field.name, new FormControl(''))
    });
  }

}
