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
loginForm!:FormGroup ;
constructor(private router:Router){

}
ngOnInit():void{
this.setForm();
}
setForm() {
  this.loginForm = new FormGroup({
    email: new FormControl('bansalbhawna117@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required])
  });
}

OnLogin() {
  if (this.loginForm.valid) {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email === 'bansalbhawna117@gmail.com' && password === '123456') {
      console.log("Login successful");
      // Redirect to employees page
      this.router.navigate(['/employees']);
    } else {
      console.log("Invalid email or password");
    }
  } else {
    console.log("Form invalid");
  }
}
}