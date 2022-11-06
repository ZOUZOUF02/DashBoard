import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merch } from '../merch.component';
@Component({
  selector: 'app-edit-merch',
  templateUrl: './edit-merch.component.html',
  styleUrls: ['./edit-merch.component.css']
})
export class EditMerchComponent implements OnInit {
  @Input() id : string | null = ''
  @Input() item : Merch = new Merch();
  Hoodie1 : Merch = {id: '0' ,type : 'Hoodies', name : 'whatever' , price : 20, desc : 'HOODIE NB 1', size: '' ,Rem : 0 ,imgurl : 'https://cdn.shopify.com/s/files/1/2200/6351/products/black-_in-the-garage-building-a-racecar_-hoodie_-designed-for-car-enthusiasts_1600x.jpg?v=1644604454'};
  Pant1 : Merch ={id: '1',type : 'Sweatpants', name : 'whatever' , price : 20, desc: 'HOODIE NB 1', size: '' ,Rem : 1 ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg'};
  Tshirt1 : Merch ={id: '2', type : 'T-Shirts', name : 'whatever' , price : 12, desc : 'HOODIE NB 1', Rem: 2, size: ''  ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152'};
  merch : Merch[] = [this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1,this.Tshirt1, this.Pant1, this.Hoodie1]
  Availableids : string[] = ['0', '1', '2']
  constructor(private route : ActivatedRoute, private router : Router) { }
  GetID()
  {
    var c = 0
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id?.toLowerCase())
    });
    this.Availableids.forEach(t => {
      if(this.id?.toLowerCase() == t)
      {
        c++;
        this.GetMerchData()
      }
    })
    if(c == 0)
    {
      alert('Wrong ID')
      // this.router.navigate(['/**'])
    }
  }
  GetMerchData()
  {
    this.merch.forEach(t => {
      if(this.id == t.id)
      {
        this.item = t
      }
    })
  }
  ngOnInit(): void {
    this.GetID()
  }

}
