import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { RoleBasedLoginComponent } from './pages/role-based-login/role-based-login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmpCrudComponent } from './pages/emp-crud/emp-crud.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';

const routes: Routes = [
  { path: '', component: PaginationComponent },
  { path: 'role-based-login', component: RoleBasedLoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: 'emp-crud', component: EmpCrudComponent },
  {path:'dependent-dropdown',component:DependentDropdownComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
