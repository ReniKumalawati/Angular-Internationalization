import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {AuthenticationService} from '@service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout()
    this.router.navigate(['/login']);
  }
}
