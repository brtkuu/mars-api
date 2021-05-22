import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PhotosApi } from './photos.api';

@Injectable()
export class PhotosService {
  constructor(private readonly photosApi: PhotosApi) {}

  async getPhotos() {
    const data = await this.photosApi.getPhotos();
    return JSON.stringify(data);
  }

  async updatePhotos() {
    const { data: photos } = await axios.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=HSQg2IZMuBBelkbTvL0FJHLtdCv6BwmfUsWPYoLy&sol=1000',
    );
    await this.photosApi.dropPhotos();
    photos.photos.forEach(
      async (e: {
        camera: { name: any; id: number };
        rover: { name: any; id: any };
        img_src: any;
      }) => {
        const data = {
          camera_name: e.camera.name,
          camera_id: e.camera.id as number,
          rover_name: e.rover.name,
          rover_id: e.rover.id,
          img_src: e.img_src,
        };
        await this.photosApi.updatePhotos(data);
      },
    );
  }
}
