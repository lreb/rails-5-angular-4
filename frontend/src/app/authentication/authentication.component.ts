import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  errorMessage: '';
  showErrorMessage: boolean;
  account: object = {
    email: '',
    password: '',
    password_confirmation: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
