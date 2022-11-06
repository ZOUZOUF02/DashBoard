import { Component, OnInit, Input } from '@angular/core';
import { Merch } from '../merch/merch.component';
@Component({
  selector: 'app-merch-add-page',
  templateUrl: './merch-add-page.component.html',
  styleUrls: ['./merch-add-page.component.css']
})
export class MerchAddPageComponent implements OnInit {
  @Input() item : Merch = new Merch()
  constructor() { }
  Submit()
  {

  }
  ngOnInit(): void {
  }

}
