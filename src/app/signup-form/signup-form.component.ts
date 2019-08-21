import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm = this.fb.group({
    name: [''],
    password: [''],
    // cpassword: [''],
    dob: [''],
    gender: [''],
    email: [''],
    mobilenumber: ['']
  });

  onSubmit() {
    this.http.post('http://172.24.167.109/User/register', this.signupForm.value, {responseType: 'text'},
    )
    .subscribe(details => {
      console.log('received', details);
    });
    console.log(this.signupForm.value);
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

}
