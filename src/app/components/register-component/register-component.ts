import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-register-component',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {
  constructor(private router: Router, public authService: AuthService) {}
  user={
    email:'',
    password:'',
    phoneNumber: null,
  }
  onSubmit(){
    try {
      this.authService.register(this.user.email, this.user.password).then((result) => {
        this.router.navigateByUrl('/dashboard');
      })
    }catch(error){

    }
  }
}
