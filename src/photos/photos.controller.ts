import { Controller, Get, Patch, Query } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get()
  async getPhotos(@Query() query): Promise<string> {
    return await this.photosService.getPhotos(query);
  }

  @Patch()
  async updatePhotos(): Promise<string> {
    await this.photosService.updatePhotos();
    return 'Photos';
  }
}
