import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '@model/user';

@Injectable()
export class UserServiceMock {
  constructor() { }
  getAll(): Observable<any> {
    const dummyUser: User = {
        id : 1,
        firstName: 'Reni',
        lastName: 'Kumalawati',
        password: '123456',
        username: 'renifal',
        token: 'Abcd123445667'
      };
    const users = [dummyUser];
    return of(users)
  }
}
