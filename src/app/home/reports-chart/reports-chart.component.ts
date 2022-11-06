import { Component, OnInit } from '@angular/core';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexStates, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexTooltip } from 'ng-apexcharts';

@Component({
  selector: 'app-reports-chart',
  templateUrl: './reports-chart.component.html',
  styleUrls: ['./reports-chart.component.css']
})

export class ReportsChartComponent implements OnInit {
  constructor() { }
  series: ApexAxisChartSeries = [{
    name: 'Sales',
    data: [31, 40, 28, 51, 42, 82, 56],
  }, {
    name: 'Revenue',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'Customers',
    data: [15, 11, 32, 18, 9, 24, 11]
  }]

  chart: ApexChart = {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    },
  }
  // annotations : ApexAnnotations = {
  //   size: 4
  // }
  colors: string[] = ['#4154f1', '#2eca6a', '#ff771d']
  fill : ApexFill = {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0.4,
      stops: [0, 90, 100]
    }
  }

  dataLabels: ApexDataLabels = {
    enabled: false
  }

  stroke: ApexStroke = {
    curve: 'smooth',
    width: 2
  }

  xaxis: ApexXAxis = {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  }
  
  tooltip: ApexTooltip = {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  }
  ngOnInit(): void {
  }
}
