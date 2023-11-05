import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfoliochart',
  templateUrl: './portfoliochart.component.html',
})

export class PortfoliochartComponent implements OnInit{

  chart_data: any;
  chart_options: any;

  ngOnInit(){
    this.chart_data = {
      labels: ['Q1','Q2','Q3'],
      datasets :[{
        label:"First Dataset",
        data: [1,2,3]
      }]
    }

    this.chart_options = {

      
      
    }
  }




}

