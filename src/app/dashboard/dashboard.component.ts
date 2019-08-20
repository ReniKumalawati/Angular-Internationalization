import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {AlertService} from '@service/alert.service';
// @ts-ignore
import {UserService} from '@service/user.service';
// @ts-ignore
import {User} from '@model/user';
// @ts-ignore
import {AuthenticationService} from '@service/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor(private alertService: AlertService,
              private userService: UserService,
              private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.alertService.clearMessage()
    this.getAllUser()
  }

  private getAllUser() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users)
  }
  delete(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.getAllUser())
  }
}
