import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-options',
  templateUrl: './video-options.component.html',
  styleUrls: ['./video-options.component.css']
})
export class VideoOptionsComponent implements OnInit {
  VideoTypes : string[] = ['GC Krypton', 'GC Snipers', 'Money Heist']
  constructor() { }

  ngOnInit(): void {
  }

}
