import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APOD, APODDocument } from './schemas/apod.schema';

@Injectable()
export class APODApi {
  constructor(@InjectModel(APOD.name) private apodModel: Model<APODDocument>) {}

  async getAPOD(query) {
    return await this.apodModel.find(query);
  }

  async updateAPOD(data: APOD) {
    const item = new this.apodModel(data);
    await item.save();
  }

  async deleteAPODS() {
    await this.apodModel.deleteMany({});
  }
}
