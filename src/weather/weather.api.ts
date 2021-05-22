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
    try {
      const item = await this.weatherModel.find({});
      await this.weatherModel.updateOne({ id: item[0].id }, data);
    } catch (e) {
      const weather = new this.weatherModel(data);
      await weather.save();
    }
  }
}
