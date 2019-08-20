import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import {RegisterComponent} from '@app/register/register.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
