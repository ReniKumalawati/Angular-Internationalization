import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {AlertService} from '@service/alert.service';
import {AuthenticationService} from '@service/authentication.service';
import {RouterModule} from '@angular/router';
import {FormBuilder} from '@angular/forms';


@NgModule({
  declarations: [],
  exports: [],
  providers: [AlertService, AuthenticationService, RouterModule, FormBuilder],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
