import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Photos, PhotosDocument } from './schemas/photos.schema';

@Injectable()
export class PhotosApi {
  constructor(
    @InjectModel(Photos.name) private photosModel: Model<PhotosDocument>,
  ) {}

  async getPhotos(): Promise<Photos[]> {
    const data = await this.photosModel.find();
    return data;
  }

  async updatePhotos(data: Photos) {
    const item = new this.photosModel(data);
    await item.save();
  }

  async dropPhotos() {
    await this.photosModel.deleteMany({});
  }
}
