import {async, TestBed} from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
      .compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
