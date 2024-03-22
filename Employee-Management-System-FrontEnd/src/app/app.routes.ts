import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  ];
  