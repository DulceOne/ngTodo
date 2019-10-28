import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { HttpService } from '../../../core/services/http.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public SignupForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),

  });

  // private passwordValidator(): ValidatorFn {
  //   return (group: FormGroup): {[key: string]: any} => {
  //     if(group.get('password').value == group.get('confirmPassword')) {
  //       return null;
  //     }
  //     return {
  //       custom: 'Password are not valid'
  //     }
  //   }
  // }

  constructor(private http: HttpService) { }

  ngOnInit() {
  }


  signUp() {
    if(this.SignupForm.valid && this.SignupForm.value.password == this.SignupForm.value.confirmPassword) {
      this.http.post('/user/signup',this.SignupForm.value).subscribe(result => {
        console.log(result)
      })
    }
  }
}
