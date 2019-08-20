import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {registerLocaleData} from '@angular/common';
import localeId from '@angular/common/locales/id';
import {ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {JwtInterceptor} from '@helper/jwt-interceptor';
// @ts-ignore
import {ErrorInterceptor} from '@helper/error-interceptor';
// @ts-ignore
import {fakeBackendProvider} from '@helper/fake-backend';
import { RegisterComponent } from './register/register.component';
// @ts-ignore
import {RegisterModule} from '@app/register/register.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// @ts-ignore
import {DashboardModule} from '@app/dashboard/dashboard.module';
import { NavbarComponent } from './_partial/navbar/navbar.component';

registerLocaleData(localeId);
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RegisterModule,
    DashboardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
