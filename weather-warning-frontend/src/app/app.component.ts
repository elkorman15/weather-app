import { Component, Input } from '@angular/core';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { WarningLevelsComponent } from './components/warning-levels/warning-levels.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeatherChartComponent, LocationSelectorComponent, WarningLevelsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'weather-app';
  selectedLocation?: string;
  warningLevels: { threshold: number, color: string }[] = [];


  onLocationChange(value: string) {
    this.selectedLocation = value;
  }

  onWarningLevelsChange(levels: { threshold: number, color: string }[]) {
    this.warningLevels = levels;
  }

}
