import { Component } from '@angular/core';

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
  //array
  selectedArr : any[] = []

  submit(){


    this.selectedname = this.name;
    this.selectedage = this.age;
    this.selectedgender = this.gender;
    this.selectedaddress = this.address;
   
    //object
    this.selectedData = {
      Name : this.selectedname,
      Age : this.selectedage,
      Gender : this.selectedgender,
      Address : this.selectedaddress
    }


    this.selectedArr.push(this.selectedData)

    console.log(this.selectedData)
    console.log(this.selectedArr);
    
    this.name = ""
    this.age = ""
    this.gender = ""
    this.address = ""

  }

}
