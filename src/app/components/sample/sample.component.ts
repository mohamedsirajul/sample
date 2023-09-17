import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  name : any;
  age: any;
  dob: any;
  gender: any;
  email: any;
  address: any;

  selectedname : any;
  selectedage : any;
  selecteddob : any;
  selectedgender : any;
  selectedemail : any;
  selectedaddress :any;

  submit(){
    this.selectedname = this.name;
    this.selectedage = this.age;
    this.selecteddob = this.dob;
    this.selectedgender = this.gender;
    this.selectedemail = this.email;
    this.selectedaddress = this.address;
   

    
  }

}
