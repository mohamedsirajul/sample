import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  name : any;
  age: any;
  gender: any;
  address: any;

  selectedname : any;
  selectedage : any;
  selectedgender : any;
  selectedaddress :any;
  selectedData : any;
  userDetailsForm : FormGroup | any
  //array
  selectedArr : any[] = []
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.userDetailsForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      age:["", [Validators.required]],
      gender:["", [Validators.required]],
      address:["", [Validators.required]],
      email : ["" ,[Validators.required, Validators.email]],
      
      Referrals: this.formBuilder.array([]),
    })
  }
  // public checkUserForm = (controlName:any, errorName:any ) => {
  //   return this.userDetailsForm[controlName].hasError(errorName);
  // }

  get dataControls() {
    return this.userDetailsForm.controls;
  }
  submit(){


    if(this.userDetailsForm.valid) {
      console.log(this.userDetailsForm.value)

      // this.selectedname = this.name;
      // this.selectedage = this.age;
      // this.selectedgender = this.gender;
      // this.selectedaddress = this.address;
     
      //object
      // this.selectedData = {
      //   Name : this.selectedname,
      //   Age : this.selectedage,
      //   Gender : this.selectedgender,
      //   Address : this.selectedaddress
      // }
  
  
      this.selectedArr.push(this.userDetailsForm.value)
  
      // console.log(this.selectedData)
      console.log(this.selectedArr);
      
      this.userDetailsForm.reset();

    }
    else{
      alert("Required valid Form")
    }

  }


}
