import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Weather } from './schemas/weather.schema';
import { WeatherApi } from './weather.api';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherApi: WeatherApi) {}

  async refreshWeather() {
    const { data: sols } = await axios.get(
      'https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json',
    );
    const weather = await this.weatherApi.updateWeather(
      sols.sols[sols.sols.length - 1],
    );
  }
}
