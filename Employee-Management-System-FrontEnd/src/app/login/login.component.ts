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
    email: new FormControl([Validators.required, Validators.email]),
    password: new FormControl([Validators.required])
  });
}

OnLogin() {
  console.log(this.loginForm.valid);
  if (this.loginForm.valid) {
    this.router.navigate(['/employees']);
    console.log("True");

}else{
  console.log("False");
}
}
}
