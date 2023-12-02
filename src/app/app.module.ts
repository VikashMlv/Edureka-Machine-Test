import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ColorDirective } from './custom directives/color.directive';
import { HighlightDirective } from './custom directives/highlight.directive';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { RoleBasedLoginComponent } from './pages/role-based-login/role-based-login.component';
import { EmpCrudComponent } from './pages/emp-crud/emp-crud.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { NavComponent } from './pages/nav/nav.component';
import { AdvanceDirectiveComponent } from './pages/advance-directive/advance-directive.component';
import { NgClassNgStyleComponent } from './pages/ng-class-ng-style/ng-class-ng-style.component';
import { NgIfComponent } from './pages/ng-if/ng-if.component';

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
    NavComponent,
    AdvanceDirectiveComponent,
    NgClassNgStyleComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
