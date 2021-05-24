import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { IWeather, Weather, WeatherDocument } from './schemas/weather.schema';

@Injectable()
export class WeatherApi {
  constructor(
    @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
  ) {}
  async updateWeather(data: Weather) {
    await this.weatherModel.deleteMany({});
    const weather = new this.weatherModel(data);
    await weather.save();
  }

  async get(): Promise<Weather> {
    const actualWeather = await this.weatherModel.find();
    return actualWeather[0];
  }
}
