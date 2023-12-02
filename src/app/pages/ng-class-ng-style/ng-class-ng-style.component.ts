import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-ng-style',
  templateUrl: './ng-class-ng-style.component.html',
  styleUrls: ['./ng-class-ng-style.component.css']
})
export class NgClassNgStyleComponent {


  ngOnInit(){
this.studentData;
  }

  studentData = [
    {name:'Rajesh Gupta', city:"Bhopal", stream:'Science',status:40,color:'green'},
    {name:'Atul', city:"Nagpur", stream:'IT',status:40,color:'orange'},
    {name:'Shubham', city:"Shahdol", stream:'IT',status:80,color:'blue'},
    {name:'Sanu', city:"Hyderabad", stream:'IT',status:60,color:'pink'},
    {name:'Vinod', city:"Pune", stream:'Science',status:20,color:"yellow"}
  ]

  sidePanel:boolean = true;
  switchUser:boolean = true;
  viewItem:boolean = false;

  PanelSwitch(){
 this.viewItem = true;
 this.sidePanel = false
  }

  closePanel(){

this.viewItem = false;
 this.sidePanel = true
  }





}
