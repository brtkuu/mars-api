import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type APODDocument = APOD & Document;

@Schema()
export class APOD {
  @Prop()
  hdurl: string;

  @Prop()
  explination: string;
}

export const APODSchema = SchemaFactory.createForClass(APOD);
