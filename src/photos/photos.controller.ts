import { Controller, Get, Patch } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get()
  async getPhotos(): Promise<string> {
    return await this.photosService.getPhotos();
  }

  @Patch()
  async updatePhotos(): Promise<string> {
    await this.photosService.updatePhotos();
    return 'Photos';
  }
}
