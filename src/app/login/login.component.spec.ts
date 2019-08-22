import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [MDBBootstrapModule.forRoot(),
        ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([])
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('form should be invalid', async(() => {
    component.loginForm.controls.username.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.valid).toBeFalsy()
  }));

  it ('form should be valid', async(() => {
    component.loginForm.controls.username.setValue('renifalalala')
    component.loginForm.controls.password.setValue('123456')
    expect(component.loginForm.valid).toBeTruthy()
  }))

  it ('should call submit method', async(() => {
    fixture.detectChanges()
    spyOn(component, 'submit')
    el = fixture.debugElement.query(By.css('button')).nativeElement
    el.click()
    expect(component.submit).toHaveBeenCalledTimes(0)
  }))

});
