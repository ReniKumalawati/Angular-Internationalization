import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import {DashboardComponent} from '@app/dashboard/dashboard.component';
// @ts-ignore
import {AuthGuard} from '@helper/auth.guard';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
