import {Component, OnInit} from '@angular/core';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'portfolio-chart',
  templateUrl: './portfolio-chart.component.html',
  imports: [
    ChartModule
  ],
  standalone: true
})
export class PortfolioChartComponent implements OnInit {
  chart_data: any;
  chart_options: any;

  ngOnInit() {
    this.chart_data = {
      labels: ['Q1', 'Q2', 'Q3'],
      datasets: [{
        label: 'First Dataset',
        data: [1, 2, 3]
      }]
    };
    this.chart_options = {};
  }
}

