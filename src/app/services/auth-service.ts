import {Injectable, inject, signal} from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  user$ = user(this.auth);
  isLoggedIn = signal(false);
  async register(email: string, password: string) {
    const result = await createUserWithEmailAndPassword(this.auth, email, password);
    this.isLoggedIn.set(true);
    return result;
  }

  async login(email: string, password: string) {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    this.isLoggedIn.set(true);
    return result;
  }

  async logout() {
    await signOut(this.auth);
    this.isLoggedIn.set(false);
  }
}
