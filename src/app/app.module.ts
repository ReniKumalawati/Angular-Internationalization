import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardsModule, MDBBootstrapModule, NavbarModule} from 'angular-bootstrap-md';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RegisterModule,
    DashboardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
