import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type APODDocument = APOD & Document;

@Schema()
export class APOD {
  @Prop()
  title: string;

  @Prop()
  hdurl: string;

  @Prop()
  explination: string;

  @Prop()
  date: string;
}

export const APODSchema = SchemaFactory.createForClass(APOD);
