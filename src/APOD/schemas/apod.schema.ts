import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type APODDocument = APOD & Document;

@Schema()
export class APOD {
  @Prop()
  title: string;

  @Prop()
  url: string;

  @Prop()
  explination: string;

  @Prop()
  date: string;

  @Prop()
  media: string;
}

export const APODSchema = SchemaFactory.createForClass(APOD);
