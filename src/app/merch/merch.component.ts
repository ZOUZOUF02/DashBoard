import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  type : string | null = ''
  Hoodie1 : Merch = {id: '0' ,type : 'Hoodies', name : 'whatever' , price : 20, desc : 'HOODIE NB 1', size: 'XL' ,Rem : 0 ,imgurl : 'https://cdn.shopify.com/s/files/1/2200/6351/products/black-_in-the-garage-building-a-racecar_-hoodie_-designed-for-car-enthusiasts_1600x.jpg?v=1644604454'};
  Pant1 : Merch ={id: '1',type : 'Sweatpants', name : 'whatever' , price : 20, desc: 'HOODIE NB 1', size: 'L' ,Rem : 1 ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg'};
  Tshirt1 : Merch ={id: '2', type : 'T-Shirts', name : 'whatever' , price : 12, desc : 'HOODIE NB 1', Rem: 2, size: 'XS'  ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152'};
  merch : Merch[] = [this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1]
  MerchOptions : string[] = ['all','t-shirts', 'sweatpants', 'hoodies', 'stats']
  constructor(private route : ActivatedRoute, private router : Router) { }
  Options()
  {
    var x = document.getElementById("List")
    this.MerchOptions.forEach(m => {
      var y = document.createElement('a')
      if(m.toLowerCase() == this.type?.toLowerCase())
      {
        y.className = 'list-group-item list-group-item-action active'
      }
      else
      {
        y.className = 'list-group-item list-group-item-action'
      }
      var z = document.createElement('option')
      z.className = 'list-group-item list-group-item-action'
      y.innerHTML = m
      y.id = m
      y.href = `Merch/${m}`
      console.log(m)
      x?.appendChild(y)
    })
  }
  GetType()
  {
    var c = 0
    this.route.paramMap.subscribe(params => {
      this.type = params.get('Type');
      console.log(this.type?.toLowerCase())
    });
    this.MerchOptions.forEach(t => {
      if(this.type?.toLowerCase() == t)
      {
        c++;
      }
    })
    if(c == 0)
    {
      this.router.navigate(['/**'])
    }
  }
  ngOnInit(): void {
    this.GetType()
    // this.Options()
  }

}
export class Merch{
  id : string = ''
  size : string = ''
  desc : string = ''
  type : string = ''
  name : string = ''
  price : number = 0
  imgurl : string = ''
  Rem : number = 0
}
