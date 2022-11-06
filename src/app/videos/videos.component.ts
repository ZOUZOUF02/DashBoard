import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  type : string | null = ''
  Hoodie1 : Video = {id: '0', type : 'Hoodies', name : 'whatever' , views : 20, desc : 'HOODIE NB 1', time : 0, watchtime: 10 , question: 'Q1' ,imgurl : 'https://cdn-images.farfetch-contents.com/17/52/88/44/17528844_36895168_300.jpg', url : ''};
  Pant1 : Video ={id: '1',type : 'Sweatpants', name : 'whatever' , views : 20, desc: 'HOODIE NB 1', time : 1, watchtime: 10  ,question: 'Q2' ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg', url : ''};
  Tshirt1 : Video ={id:'2', type : 'T-Shirts', name : 'whatever' , views : 12, desc : 'HOODIE NB 1', time: 2, watchtime: 10  ,question: 'Q3' ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152', url : ''};
  videos: Video[] = [this.Tshirt1, this.Pant1, this.Hoodie1, this.Tshirt1, this.Pant1, this.Hoodie1, this.Tshirt1, this.Pant1, this.Hoodie1, this.Tshirt1, this.Pant1, this.Hoodie1]
  videosOptions : string[] = ['all','GC KRYPTON', 'GC SNIPERS', 'MONEY HEIST', 'stats', 'Q&A']
  constructor(private route : ActivatedRoute, private router : Router){}
  GetType()
  {
    var c = 0
    this.route.paramMap.subscribe(params => {
      this.type = params.get('Type');
      console.log(this.type?.toLowerCase())
    });
    this.videosOptions.forEach(t => {
      if(this.type?.toLowerCase() == t.toLowerCase())
      {
        this.videos.filter(item => item.type === this.type)
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
  }

}
export class Video{
  id : string = ''
  name : string = ''
  type : string = ''
  views : number = 0
  desc : string = ''
  time : number = 0
  watchtime : number = 0
  question : string = ''
  imgurl : string = ''
  url : string = ''
}
