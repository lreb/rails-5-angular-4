import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../helpers/PasswordValidation';
import { ApiService } from '../api.service';
import { Account } from '../models/account';
@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {
  form: FormGroup;
  acceptedConditions: boolean;
  errorMessage: '';
  showErrorMessage: boolean;
  public account: Account;
  
  /* = {
    email: string,
    password: '',
    password_confirmation: ''
  };*/
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.acceptedConditions = false;
    this.account = new Account();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordConfirmation: [null, Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // validate if password match
    });
    console.log(this.account);
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.account);
      this.apiService.post('account', this.account).subscribe(
        data => {
          alert('account created');
        },
        err => {
          console.error(JSON.stringify(err.error.status) );
          console.error(JSON.stringify(err.error) );
          this.errorMessage = err.error.status;
          this.showErrorMessage = true;
        });
    } else {
      //
    }
  }
}
