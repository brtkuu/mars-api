import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhotosDocument = Photos & Document;

@Schema()
export class Photos {
  @Prop()
  camera_name: string;

  @Prop()
  camera_id: number;

  @Prop()
  rover_name: string;

  @Prop()
  rover_id: number;

  @Prop()
  img_src: string;
}

export const PhotosSchema = SchemaFactory.createForClass(Photos);
