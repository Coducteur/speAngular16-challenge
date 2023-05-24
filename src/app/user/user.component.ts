import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: any;
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    adress: this.fb.group({
      rue: [''],
      cp: [''],
      ville: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): any {
    console.log(this.userForm.value);
  }
}
