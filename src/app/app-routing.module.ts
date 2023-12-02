import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { RoleBasedLoginComponent } from './pages/role-based-login/role-based-login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmpCrudComponent } from './pages/emp-crud/emp-crud.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { AdvanceDirectiveComponent } from './pages/advance-directive/advance-directive.component';
import { NgClassNgStyleComponent } from './pages/ng-class-ng-style/ng-class-ng-style.component';
import { NgIfComponent } from './pages/ng-if/ng-if.component';

const routes: Routes = [
  { path: '', component: PaginationComponent },
  { path: 'role-based-login', component: RoleBasedLoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: 'emp-crud', component: EmpCrudComponent },
  { path: 'dependent-dropdown', component: DependentDropdownComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'advance-directive', component: AdvanceDirectiveComponent },
  { path: 'ngClass-ngStyle', component: NgClassNgStyleComponent },
  { path: 'ng-if', component: NgIfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
