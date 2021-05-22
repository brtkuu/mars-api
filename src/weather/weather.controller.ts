import { Controller, Get, Post } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getHello(): string {
    return 'Weather refreshed';
  }
}
