import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
// @ts-ignore
import {AuthenticationService} from '@service/authentication.service';
// @ts-ignore
import {AlertService} from '@service/alert.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private router: Router
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submit() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.username.value, this.password.value)
        .pipe(first())
        .subscribe(data => {
          this.alertService.setSuccessMessage('you are logged in');
          this.router.navigate(['/dashboard'])
        }, error => {
          this.alertService.setErrorMessage(error);
        });
    }
  }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}
}
