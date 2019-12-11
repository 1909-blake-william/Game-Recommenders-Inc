import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-test-pie-chart',
  templateUrl: './test-pie-chart.component.html',
  styleUrls: ['./test-pie-chart.component.scss']
})

export class TestPieChartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Recommended', 'Meh', 'Exceptional', 'Skip'];
  public pieChartData: SingleDataSet = [493, 218, 216, 43];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
