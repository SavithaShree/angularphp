import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  success: 'login success';

  onSubmit() {
    this.http.post('http://172.24.167.109', this.loginForm.value, {responseType: 'json'},
    )
    .subscribe(data => {
      console.log(data);
    });
    console.log(this.loginForm.value);
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

}
