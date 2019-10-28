import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpService }  from '../../../core/services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public data: {token: string};

  public Signin: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.Signin.value)
    this.http.post('/user/signin', this.Signin.value).subscribe(result => {
      this.data = result as {token};
      localStorage.setItem('token',this.data.token);
    })
  }
}
