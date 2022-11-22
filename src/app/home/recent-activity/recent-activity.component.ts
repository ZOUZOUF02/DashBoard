import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {
  act1 : Activity = {name : 'RecentAct 1', interval : 60, categ : 'Order'}
  act2 : Activity = {name : 'RecentAct 2', interval : 30, categ : 'Comment'}
  activities : Activity[] = [this.act1, this.act2, this.act1, this.act2, this.act1, this.act2]
  constructor() { }

  ngOnInit(): void {
  }

}
export class Activity
{
  name : string = ''
  interval : number = 0
  categ : string = ''

}
