import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  id!:number;
  employee:Employee=new Employee();
constructor(private employeeSrvice:EmployeeService,private route:ActivatedRoute,private router:Router){

}
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.employeeSrvice.getEmployeeById(this.id).subscribe(data => {
    this.employee = data;
  });
}

onSubmit(): void {
  this.employeeSrvice.updateEmployee(this.id, this.employee).subscribe(
    () => {
      this.goToEmployeeList();
    },
    error => {
      console.log(error);
    }
  );
}

goToEmployeeList(): void {
  this.router.navigate(['/employees']);
}
}
