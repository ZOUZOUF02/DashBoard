import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-merch-option',
  templateUrl: './merch-option.component.html',
  styleUrls: ['./merch-option.component.css']
})
export class MerchOptionComponent implements OnInit {
  @Input() type : string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
