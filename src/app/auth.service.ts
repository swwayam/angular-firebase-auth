import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  authState,
  User,
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #auth = inject(Auth);

  constructor() {}

  async signUp(email: string, password: string): Promise<void> {
    try {
      let user = await createUserWithEmailAndPassword(
        this.#auth,
        email,
        password
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  signIn(email: string, password: string): void {
    
  }

  isUserLoggedIn(): any {
    return authState(this.#auth);
  }
}
