import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-merch',
  templateUrl: './one-merch.component.html',
  styleUrls: ['./one-merch.component.css']
})
export class OneMerchComponent implements OnInit {
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
  ngOnInit(): void {
  }
  clickEvent(){
    this.show = !this.show;       
}
}
