import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.css']
})
export class SampleCardComponent implements OnInit {
  @Input() id : string = ''
  @Input() name : string = ''
  @Input() type : string = ''
  @Input() price : number = 0
  @Input() img : string = ''
  @Input() desc : string = ''
  @Input() Rem : number = 0
  @Input() size : string = ''
  @Input() show: boolean = false
  constructor() { }
  clickEvent(){
    this.show = !this.show;       
}
  ngOnInit(): void {
  }

}
