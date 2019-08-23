import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el: HTMLElement
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [MDBBootstrapModule.forRoot(), ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('form should be invalid', async(() => {
    component.registerForm.controls.username.setValue('');
    component.registerForm.controls.password.setValue('');
    component.registerForm.controls.firstName.setValue('')
    component.registerForm.controls.lastName.setValue('')
    expect(component.registerForm.valid).toBeFalsy()
  }));

  it ('form should be valid', async(() => {
    component.registerForm.controls.username.setValue('renifalalala')
    component.registerForm.controls.password.setValue('123456')
    component.registerForm.controls.firstName.setValue('Reni')
    component.registerForm.controls.lastName.setValue('Kumalawati')
    expect(component.registerForm.valid).toBeTruthy()
  }))

  it ('should call submit method', async(() => {
    fixture.detectChanges()
    spyOn(component, 'submit')
    el = fixture.debugElement.query(By.css('button')).nativeElement
    el.click()
    expect(component.submit).toHaveBeenCalledTimes(0)
  }))
});
