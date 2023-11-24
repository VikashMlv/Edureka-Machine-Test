import { Component } from '@angular/core';
import { Iemployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

   ShowEdit:boolean = false;   //declaring ShowEdit variable 

  employeeData: Iemployee[];

  constructor() {
                
    this.employeeData = [     //hard coded data 
      {EmployeeId:1,FirstName:'karan',LastName:'singh',Salary:20000,Dob:'20/02/2001',email:'abc@gmail.com'},
      { EmployeeId:2,FirstName:'Rajesh',LastName:'Gupta',Salary:250000,Dob:'20/02/2004',email:'rj@gmail.com'},
      { EmployeeId:3,FirstName:'Atul',LastName:'Bhau',Salary:35000,Dob:'24/04/1998',email:'lkgukg@gmail.com'}
    ]
  }


  ngOninit() {

  }


  editEmployee(){      //edit Employee
this.ShowEdit = true;
  }

  updateEmployee(){    //update Employee
    this.ShowEdit = false;
  }

}
