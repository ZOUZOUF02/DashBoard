import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  StatCard1 : StatCardData = {Name : 'Orders', Filter:'Today', Icon: 'cart', Data: 412,Percentage : 12}
  StatCard2 : StatCardData = {Name : 'Revenue', Filter:'Today', Icon: 'currency-dollar',Data: 3000000,Percentage : -6}
  StatCard3 : StatCardData = {Name : 'New Users', Filter:'Today', Icon: 'people',Data: 20,Percentage : 5}
  statcards : StatCardData[] = [this.StatCard1, this.StatCard2, this.StatCard3]
  constructor() { }

  ngOnInit(): void {
  }
}
export class StatCardData
{
  Name : string = ''
  Filter : string = ''
  Icon : string = ''
  Data : number = 0
  Percentage : number = 0;
}
