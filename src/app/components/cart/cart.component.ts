import { Component } from '@angular/core';
import { DatapassService } from 'src/app/services/datapass.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private getdata : DatapassService
  ){}

  cartData:any;
  
  ngOnInit(): void {
    this.cartData = this.getdata.storedArr

    console.log(this.cartData)

  }

}
