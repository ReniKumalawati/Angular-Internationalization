import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpLoaderFactory} from '@app/app.module';
import {NavbarComponent} from '@partial/navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import {User} from '@model/user';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, NavbarComponent ],
      providers: [
        TranslateService,
      ],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
        MDBBootstrapModule.forRoot(),
        HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    const dummyUser: User = {
      id : 1,
      firstName: 'Reni',
      lastName: 'Kumalawati',
      password: '123456',
      username: 'renifal',
      token: 'Abcd123445667'
    }
    component.currentUser = dummyUser
    component.users = [dummyUser]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
