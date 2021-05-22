import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APOD, APODDocument } from './schemas/apod.schema';

@Injectable()
export class APODApi {
  constructor(@InjectModel(APOD.name) private APODModel: Model<APODDocument>) {}
}
