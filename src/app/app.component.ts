import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Internationalization';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('id')
  }
  ngOnInit(): void {
    environment.API_URL = window.location.origin
  }
}
