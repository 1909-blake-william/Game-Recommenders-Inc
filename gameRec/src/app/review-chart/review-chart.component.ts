import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-chart',
  templateUrl: './review-chart.component.html',
  styleUrls: ['./review-chart.component.scss']
})
export class ReviewChartComponent implements OnInit {
  pieChartLabels = ['User 1', 'User 2', 'User 3'];
  pieChartData = [25, 50, 75];
  pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
