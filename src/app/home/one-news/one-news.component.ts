import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.css']
})
export class OneNewsComponent implements OnInit {
  @Input()News : News = new News()
  constructor() { }

  ngOnInit(): void {
  }

}
export class News
{
  Title : string = ''
  Img : string = ''
  Desc : string = ''
}
