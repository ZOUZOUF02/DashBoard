import { Component, OnInit } from '@angular/core';
import { News } from '../one-news/one-news.component';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {
  News1 : News = {Title : 'Test1', Desc : 'WE ARE TESTING THE NEWS', Img : 'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'}
  News2 : News = {Title : 'Test2', Desc : 'WE ARE TESTING THE NEWS', Img : 'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'}
  News3 : News = {Title : 'Test3', Desc : 'WE ARE TESTING THE NEWS', Img : 'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'}
  News4 : News = {Title : 'Test4', Desc : 'WE ARE TESTING THE NEWS', Img : 'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'}
  News5 : News = {Title : 'Test5', Desc : 'WE ARE TESTING THE NEWS', Img : 'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'}
  AllNews : News[] = [this.News1, this.News2, this.News3, this.News4, this.News5, this.News5, this.News5,this.News5]
  constructor() { }
  ngOnInit(): void {
  }

}
