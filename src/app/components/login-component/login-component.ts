import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  constructor(private router: Router, public authService: AuthService) {}
  user = {
    email: '',
    password: '',
  }
  async onSubmit(){
    try {
      await this.authService.login(this.user.email, this.user.password);
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
    }
  }
}
