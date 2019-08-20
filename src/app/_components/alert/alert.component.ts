import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  message: any
  private subscription: Subscription
  constructor(private alertService: AlertService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.subscription = this.alertService.getAlert().subscribe(message => {
      switch (message && message.type) {
        case 'success':
          message.cssClass = 'alert alert-success'
          break;
        case 'error':
          message.cssClass = 'alert alert-danger'
          break
      }

      this.message = message
    })
  }

}
