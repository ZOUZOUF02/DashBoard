import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch-select',
  templateUrl: './merch-select.component.html',
  styleUrls: ['./merch-select.component.css']
})
export class MerchSelectComponent implements OnInit {
  @Input() SelectedMerch : string = ''
  constructor() { }

  ngOnInit(): void {
  }
  GetMerch()
  {
    
  }
}
