import { Component, OnChanges, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { WeatherService } from './../../services/weather.service';


@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css'],
  imports: [BaseChartDirective, CommonModule ],
  standalone: true,
})
export class WeatherChartComponent implements OnChanges  {
  @Input() location?: string;
  @Input() warningLevels?: { threshold: number, color: string }[] = [];

  constructor(private weatherService: WeatherService) {}



  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const windGust = context.raw as number;
            const warning = this.warningLevels?.find(level => windGust > level.threshold);
            return warning ? `Wind Gust: ${windGust} - Warning: ${warning.color}` : `Wind Gust: ${windGust}`;
          
          }
        }
      }
    }
  };




  ngOnChanges() {
    if(this.location) {
      this.fetchData(this.location)
    }
  }

  fetchData(location: string) {
    this.weatherService.getWeatherData(location).subscribe(data => {
      const times = data.data.map((item: { Time: any; }) => item.Time);
      const gusts = data.data.map((item: { WIND_GUST: any; }) => item.WIND_GUST);

      this.chartData = {
        labels: times,
        datasets: [
          {
            data: gusts,
            label: 'Wind Gusts',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      };
    });
  }


}