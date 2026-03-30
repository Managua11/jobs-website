import { Routes } from '@angular/router';
import {LoginComponent} from './components/login-component/login-component';
import {RegisterComponent} from './components/register-component/register-component';
import {JobList} from './components/job-list/job-list';
import {JobPage} from './components/job-page/job-page';
import {Post} from './components/post/post';

export const routes: Routes = [
  {path: '', redirectTo: 'LoginComponent', pathMatch: 'full'},
  {path: 'job/:id', loadComponent: () => JobPage},
  {path: 'login', loadComponent: () => LoginComponent},
  {path: 'register', loadComponent: () => RegisterComponent},
  {path: 'dashboard', loadComponent: ()=>JobList},
  {path: 'post', loadComponent: () => Post}
];
