import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotosApi } from './photos.api';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { Photos, PhotosSchema } from './schemas/photos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Photos.name, schema: PhotosSchema }]),
  ],
  controllers: [PhotosController],
  providers: [PhotosService, PhotosApi],
})
export class PhotosModule {}
