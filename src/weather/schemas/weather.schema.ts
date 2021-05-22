import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WeatherDocument = Weather & Document;

@Schema()
export class Weather {
  @Prop()
  terrestrial_date: string;

  @Prop()
  sol: number;

  @Prop()
  ls: string;

  @Prop()
  season: string;

  @Prop()
  min_temp: string;

  @Prop()
  max_temp: string;

  @Prop()
  preasure: string;

  @Prop()
  sunrise: string;

  @Prop()
  sunset: string;
}

export interface IWeather {
  terrestrial_date: string;
  sol: number;
  ls: string;
  season: string;
  min_temp: string;
  max_temp: string;
  preasure: string;
  sunrise: string;
  sunset: string;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
