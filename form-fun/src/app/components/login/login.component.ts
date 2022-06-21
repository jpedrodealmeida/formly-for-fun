import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fields!: Form[]

  constructor() { }

  ngOnInit(): void {
   this.fields = [
    {
      name: 'email',
      label: 'E-mail',
      type: 'input'
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'input'
    }
   ]
  }

}
