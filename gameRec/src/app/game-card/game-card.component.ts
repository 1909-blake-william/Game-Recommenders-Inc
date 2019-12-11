import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [700], label: 'Account A' },
    { data: [340], label: 'Account B' },
    { data: [500], label: 'Account C' }
  ];

  chartLabels = ['January'];

  myColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    // ...colors for additional data sets
  ];

  onChartClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
