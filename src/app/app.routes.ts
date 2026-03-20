import { Routes } from '@angular/router';
import {LoginComponent} from './components/login-component/login-component';
import {RegisterComponent} from './components/register-component/register-component';
import {JobList} from './components/job-list/job-list';
import {JobCard} from './components/job-card/job-card';

export const routes: Routes = [
  {path: 'login', loadComponent: () => LoginComponent},
  {path: 'register', loadComponent: () => RegisterComponent},
  {path: 'dashboard', loadComponent:() => JobList}
];
