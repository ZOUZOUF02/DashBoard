import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/videos/videos.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-videos-most-viewed',
  templateUrl: './videos-most-viewed.component.html',
  styleUrls: ['./videos-most-viewed.component.css']
})
export class VideosMostViewedComponent implements OnInit {
  Video1 : Video = {id: '0',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] ,type : 'Hoodies',date: new Date(), name : 'whatever' ,views : 20, desc : 'HOODIE NB 1', time : 0, watchtime: 10 , question: 'Q1' ,imgurl : 'https://cdn-images.farfetch-contents.com/17/52/88/44/17528844_36895168_300.jpg', url : ''};
  Video2 : Video ={id: '1',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] ,type : 'Sweatpants',date: new Date(), name : 'whatever' , views : 20, desc: 'HOODIE NB 1', time : 1, watchtime: 10  ,question: 'Q2' ,imgurl : 'https://media.gq.com/photos/6036b7eeb86c65eb745394a8/master/w_2000,h_1333,c_limit/Goodwear-fleece-sweatpants-with-side-pockets.jpg', url : ''};
  Video3 : Video ={id:'2',comments : ['Niceee', 'Keep the HARD WORK', 'WE LEARNED A LOT'] , type : 'T-Shirts',date: new Date(), name : 'whatever' , views : 12, desc : 'HOODIE NB 1', time: 2, watchtime: 10  ,question: 'Q3' ,imgurl : 'https://static.zara.net/photos///2022/I/0/2/p/3471/300/409/2/w/147/3471300409_6_1_1.jpg?ts=1663052798152', url : ''};
  videos: Video[] = [this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3, this.Video1, this.Video2, this.Video3]
  videosOptions : string[] = ['all','GC KRYPTON', 'GC SNIPERS', 'MONEY HEIST', 'stats', 'Q&A']
  constructor() { }
  ngOnInit(): void {
  }

}
