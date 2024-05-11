import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, withComponentInputBinding } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router:Router){
  }

  OnLogin(email:any,password:any){
    if (emailid=='example@gmail.com' && password=="123") {
  
    sessionStorage.setItem("isloggedIn","true");

   } else {
      sessionStorage.setItem("isloggedIn ","false");
    }

  
  }
  
}
