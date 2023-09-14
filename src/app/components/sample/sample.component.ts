import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  name : any;

  selectname : any;
  // ngOnInit(): void {
  //   console.log(this.name);
    
  // }
  onchange(){
    this.selectname = this.name
    console.log(this.name);
  }
  onchanges(){
    this.selectname = this.name
    alert(this.selectname)
    console.log(this.name);
  }
}
