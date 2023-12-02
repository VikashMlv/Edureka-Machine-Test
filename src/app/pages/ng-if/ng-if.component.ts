import { Component } from '@angular/core';
import {Istudent} from '../../models/istudent';


@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {


  ngOnInit(){
    this.studentData;

  }

  studentData:Istudent[] = [
    {name:"Rajesh Gupta",city:"Bhopal",isActive:true,gender:'male'},
    {name:"Atul",city:"Nagpur",isActive:false,gender:'male'},
    {name:"Priyanka",city:"Bhopal",isActive:true,gender:'female'},
    {name:"Sanu",city:"Hyd",isActive:true,gender:'male'},
    {name:"khushbu",city:"indore",isActive:false,gender:'female'},

  ]

}
