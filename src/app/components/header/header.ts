import {Component, EventEmitter, inject, Inject, Output, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service';
import { Router } from '@angular/router';
import {FilterHelper} from '../../services/filter-helper';


@Component({
  selector: 'app-header',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() filterOutput = new EventEmitter();
  filterHelper = inject(FilterHelper);
  constructor(public authService: AuthService, private router: Router) {}
  locationControl = new FormControl('all', { nonNullable: true });
  searchValue: string = "";
  filter(){
    this.filterHelper.inputSubject.next({name: this.searchValue, location: this.locationControl.value});
  }
  handleLogin(){
    this.router.navigate(['login']);
  }
  handleRegistration(){
    this.router.navigate(['register']);
  }
  toJobPost(){
    this.router.navigate(['post']);
  }
}
