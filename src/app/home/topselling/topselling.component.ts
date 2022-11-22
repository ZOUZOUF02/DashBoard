import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Merch } from 'src/app/merch/merch.component';
@Component({
  selector: 'app-topselling',
  templateUrl: './topselling.component.html',
  styleUrls: ['./topselling.component.css']
})
export class TopsellingComponent implements OnInit {
  Hoodie1 : Merch = {id: '0' ,type : 'Hoodies', name : 'whatever' , price : 20, desc : 'HOODIE NB 1', size: 'XL' ,Rem : 0 ,imgurl : 'https://cdn.shopify.com/s/files/1/2200/6351/products/black-_in-the-garage-building-a-racecar_-hoodie_-designed-for-car-enthusiasts_1600x.jpg?v=1644604454'};
  Pant1 : Merch ={id: '1',type : 'Sweatpants', name : 'whatever' , price : 20, desc: 'HOODIE NB 1', size: 'L' ,Rem : 1 ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg'};
  Tshirt1 : Merch ={id: '2', type : 'T-Shirts', name : 'whatever' , price : 12, desc : 'HOODIE NB 1', Rem: 2, size: 'XS'  ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152'};
  merch : Merch[] = [this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1]
  constructor() { }
 Revenue (price : number, orders : number): number {
  return price * orders
 }
  ngOnInit(): void {
  }

}
