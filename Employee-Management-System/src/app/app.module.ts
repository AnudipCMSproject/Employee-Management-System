import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";

@NgModule({
    declarations: [
      AppComponent,
      EmployeeListComponent,
   UpdateEmployeeComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }