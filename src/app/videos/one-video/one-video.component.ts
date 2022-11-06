import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-video',
  templateUrl: './one-video.component.html',
  styleUrls: ['./one-video.component.css']
})
export class OneVideoComponent implements OnInit {
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
