import {async, TestBed} from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '@app/login/login.component';

describe('AuthenticationService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
      .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
