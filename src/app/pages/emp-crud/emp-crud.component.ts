import { Component } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCrudComponent {



  form = new FormGroup({
    fullname: new FormControl('', Validators.minLength(4)),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });

  switchView: boolean = true;  // swicthng Ui form and table 

  formArray: any[] = []; // array for local storage data 

  constructor() {
    this.formArray.length
  }

  ngOnInit() {
    this.formArray;
  }
  onSubmit(): void {
    let localData = localStorage.getItem("formData")
    if (localData == null) {
      this.formArray.push(this.form.value)
      localStorage.setItem("formData", JSON.stringify(this.formArray))
    }
    else {
      this.formArray.push(this.form.value)
      localStorage.setItem("formData", JSON.stringify(this.formArray))
    }

  }

}
