import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-sample-card',
  templateUrl: './video-sample-card.component.html',
  styleUrls: ['./video-sample-card.component.css']
})
export class VideoSampleCardComponent implements OnInit {
  @Input() id : string = ''
  @Input() name : string = ''
  @Input()type : string = ''
  @Input()views : number = 0
  @Input()desc : string = ''
  @Input()time : number = 0
  @Input()watchtime : number = 0
  @Input()question : string = ''
  @Input()imgurl : string = ''
  @Input()url : string = ''
  @Input() show : boolean = false
  constructor() { }
  clickEvent(){
    this.show = !this.show;       
}
  ngOnInit(): void {
  }

}
