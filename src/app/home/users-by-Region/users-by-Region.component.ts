import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-users-by-Region',
  templateUrl: './users-by-Region.component.html',
  styleUrls: ['./users-by-Region.component.css']
})
export class UsersByRegionComponent implements OnInit {
  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 1048,
          name: 'Middle East'
        },
        {
          value: 735,
          name: 'Europe'
        },
        {
          value: 580,
          name: 'East Asia'
        },
        {
          value: 484,
          name: 'North America'
        },
        {
          value: 300,
          name: 'Oceania'
        }
      ]
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }
}
