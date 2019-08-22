import { Injectable } from '@angular/core';
import {User} from '@model/user';
import {BehaviorSubject, of} from 'rxjs';

@Injectable()
export class AuthenticationServiceMock {
  private currentUserSubject: BehaviorSubject<User>
  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    const dummyUser: User = {
      id : 1,
      firstName: 'Reni',
      lastName: 'Kumalawati',
      password: '123456',
      username: 'renifal',
      token: 'Abcd123445667'
    };
    this.currentUserSubject.next(dummyUser);
  }
  get currentUserValue(): User {
    return this.currentUserSubject.value
  }
}
