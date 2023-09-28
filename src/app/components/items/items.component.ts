import { Component } from '@angular/core';
import { DatapassService } from 'src/app/services/datapass.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  showSearch = false 
  searchText = '';

  toggleSearch: boolean = false;

  openSearch() {
    this.toggleSearch = true;
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  elementVal : any;
  addedData: any;
  arrData : any[] = [];
  counter  = 0 ;

  productArr = [
    {id: 1, name: 'Hoodi',image:window.origin+'/assets/image/hoodi.jpg', price: 1500},
    {id: 2, name: 'Coat',image:window.origin+'/assets/image/coat.jpg', price: 1800},
    {id: 3, name: 'T-shirt',image:window.origin+'/assets/image/Tshirt.jpg', price: 600},
    {id: 4, name: 'Home wear',image:window.origin+'/assets/image/homewear.jpg', price: 500},
  ]

  addtocart(element:any){

    this.elementVal = element

    this.addedData = this.productArr[this.elementVal]
    
    // console.log(this.addedData);

    this.arrData.push(this.addedData)
    
    console.log(this.arrData);

    this.datapass.strdata(this.arrData)
    
    this.counter = this.arrData.length
  }

  constructor(
    private datapass : DatapassService
  ){
    console.log(this.productArr);
        
  }
}
