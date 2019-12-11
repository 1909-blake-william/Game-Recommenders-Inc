import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  pieChartLabels = ['User 1', 'User 2', 'User 3'];
  pieChartData = [25, 50, 75];
  pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
