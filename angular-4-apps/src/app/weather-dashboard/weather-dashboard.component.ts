import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})

export class WeatherDashboardComponent {
  zipCode: string = '';
  humidity: string = '';
  city: string = '';
  temperature: string = '';
  conditions: string = '';
  private apiKey: string = '5d4ff4f2e99e0cce15a54a4f247fcc58';
  private apiBaseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';

  constructor(private http: HttpClient) {}

  getWeather() {
    this.http.get(`${this.apiBaseUrl}&zip=${this.zipCode},us&appid=${this.apiKey}`).subscribe((data: any) => {
      this.temperature = data.main.temp;
      this.conditions = data.weather[0].main;
      this.city = data.name;
      this.humidity = data.main.humidity;
      console.log(data);
    }, error => {
      console.error(error);
      this.temperature = '';
      this.conditions = '';
    });
  }
}