import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  type : string | null = ''
  Video1 : Video = {id: '0',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] ,type : 'Hoodies',date: new Date(), name : 'whatever' ,views : 20, desc : 'HOODIE NB 1', time : 0, watchtime: 10 , question: 'Q1' ,imgurl : 'https://cdn-images.farfetch-contents.com/17/52/88/44/17528844_36895168_300.jpg', url : ''};
  Video2 : Video ={id: '1',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] ,type : 'Sweatpants',date: new Date(), name : 'whatever' , views : 20, desc: 'HOODIE NB 1', time : 1, watchtime: 10  ,question: 'Q2' ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg', url : ''};
  Video3 : Video ={id:'2',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] , type : 'T-Shirts',date: new Date(), name : 'whatever' , views : 12, desc : 'HOODIE NB 1', time: 2, watchtime: 10  ,question: 'Q3' ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152', url : ''};
  videos: Video[] = [this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3]
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
  comments : string[] = []
  date : Date = new Date()
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
