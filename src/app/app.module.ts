import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './custom directives/color.directive';
import { HighlightDirective } from './custom directives/highlight.directive';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { RoleBasedLoginComponent } from './pages/role-based-login/role-based-login.component';
import { EmpCrudComponent } from './pages/emp-crud/emp-crud.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { NavComponent } from './pages/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    HighlightDirective,
    PaginationComponent,
    RoleBasedLoginComponent,
    EmpCrudComponent,
    DependentDropdownComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
