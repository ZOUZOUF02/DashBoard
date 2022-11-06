import { Component, OnInit, Input } from '@angular/core';
import { StatCardData } from '../home.component';
@Component({
  selector: 'app-statcards',
  templateUrl: './statcards.component.html',
  styleUrls: ['./statcards.component.css']
})
export class StatcardsComponent implements OnInit {
 @Input() st : StatCardData = new StatCardData;
  constructor() { }

  ngOnInit(): void {
  }

}
