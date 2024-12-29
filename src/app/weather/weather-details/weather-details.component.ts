import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent {
  @Input() weatherData: any;

  getRoundedTemp(temp: number): number {
    return Math.round(temp);
  }
}
