import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  constructor(private fb: FormBuilder){}
  
  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      mdp: ['']
    }),
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: ['']
    })
  });

  onSubmit() {
    console.log(this.userForm.value);
} 
}
