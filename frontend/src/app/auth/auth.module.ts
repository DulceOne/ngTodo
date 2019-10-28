import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrimeThemeModule } from '../core/prime-theme/prime-theme.module';
import { MaterialThemeModule } from '../core/material-theme/material-theme.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    PrimeThemeModule,
    MaterialThemeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'signup',
            component: SignupComponent
          },
          {
            path: 'signin',
            component: SigninComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
