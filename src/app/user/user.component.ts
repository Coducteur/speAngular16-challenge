import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/data/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: User;
  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
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
