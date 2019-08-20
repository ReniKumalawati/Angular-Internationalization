import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
// @ts-ignore
import {User} from '@model/user';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>
  private currentUser: Observable<User>
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(username, password) {
    console.log(environment.API_URL)
    return this.http.post<any>(`${environment.API_URL}/users/authenticate`, { username, password })
      .pipe(map(user => {
        console.log('aaaa')
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
