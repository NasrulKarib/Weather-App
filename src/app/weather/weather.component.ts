import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  cityName: string = 'Dhaka';
  weatherData: any = null;
  apiError:string = '';

  constructor(private http: HttpClient) {}

  fetchWeather() {
    const apiUrl = `https://weather-app-backend-xpfl.vercel.app/weather/${this.cityName}`;
    this.getWeatherData(apiUrl).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.apiError = '';
      },
      error: (err) => {
        this.apiError = 'City not found. Please try again.';
        this.weatherData = null;
      }
    });
  }

  getWeatherData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
