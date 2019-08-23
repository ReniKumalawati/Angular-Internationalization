import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {UserService} from '@service/user.service';
import {first} from 'rxjs/operators';
// @ts-ignore
import {AlertService} from '@service/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private route: Router,
              private alertService: AlertService,
              private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {return this.registerForm.get('username');}
  get password() {return this.registerForm.get('password');}
  get firstName() {return this.registerForm.get('firstName');}
  get lastName() {return this.registerForm.get('lastName');}

  submit() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(data => {
          this.alertService.setSuccessMessage("Registration Success")
          this.route.navigate(['/login'])
        }, error => {
          this.alertService.setErrorMessage(error)
        })
    }
  }
}
