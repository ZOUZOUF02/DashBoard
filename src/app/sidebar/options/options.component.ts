import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  MerchTypes : string[] = ['t-shirts', 'sweatpants', 'hoodies']
  constructor() { }

  ngOnInit(): void {
  }

}
