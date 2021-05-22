import { Controller, Get, Patch } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(): Promise<string> {
    return JSON.stringify(await this.weatherService.getWeather());
  }

  @Patch()
  update(): string {
    this.weatherService.updateWeather();
    return 'Weather refreshed';
  }
}
