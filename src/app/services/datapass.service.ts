import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatapassService {
  storedArr : any[] = [];

  strdata(storedDatas:any){
    this.storedArr = storedDatas
    console.log(storedDatas);
    
  }
  constructor() { }
}
