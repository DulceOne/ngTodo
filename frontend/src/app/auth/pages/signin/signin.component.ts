import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpService }  from '../../../core/services/http.service';

type Token = {
  token: string
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public data;

  public Signin: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.Signin.value)
    this.http.post('/user/signin', this.Signin.value).subscribe(result  => {
      const data: Token = <Token> result;
      localStorage.setItem('token', data.token );
    })
  }
}
