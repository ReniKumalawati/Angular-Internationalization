import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from '@partial/navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import {User} from '@model/user';
import {TranslateCustomLoader} from '@helper/TranslateCustomLoader';
import {UserService} from '@service/user.service';
import {UserServiceMock} from '@app/_mocks/user.service.mock';
import {AuthenticationService} from '@service/authentication.service';
import {AuthenticationServiceMock} from '@app/_mocks/authentication.service.mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let translateService: TranslateService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, NavbarComponent ],
      providers: [
        TranslateService,
        {provide: UserService, useClass: UserServiceMock},
        {provide: AuthenticationService, useClass: AuthenticationServiceMock}
      ],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateCustomLoader
        }
      }),
        MDBBootstrapModule.forRoot(),
        HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));
  beforeEach(inject([TranslateService], (service) => {
    translateService = service;
    translateService.use('id');
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be indonesian languange', () => {
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain('wellcome Reni');
  //     expect(compiled.querySelector('h2').textContent).toContain('Pengguna');
  //     expect(compiled.querySelectorAll('th')[1].textContent).toContain('Nama')
  //     expect(compiled.querySelectorAll('th')[2].textContent).toContain('Pengaturan')
  // });
});
