import {Component, EventEmitter, Inject, Output, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service';
import { Router } from '@angular/router';


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
  constructor(public authService: AuthService, private router: Router) {}
  locationControl = new FormControl('all');
  searchValue: string = "";
  filter(){
    this.filterOutput.emit({searchValue: this.searchValue, locationControl: this.locationControl.value});
  }
  handleLogin(){
    this.router.navigate(['login']);
  }
  handleRegistration(){
    this.router.navigate(['register']);
  }
}
