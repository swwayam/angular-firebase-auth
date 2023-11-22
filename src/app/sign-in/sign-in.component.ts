import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  userInfo : any = {
    email: "",
    password: ""
  }

  signIn() : void{
    console.log(this.userInfo);
    
  }
}
