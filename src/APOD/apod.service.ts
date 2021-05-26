import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { APODApi } from './apod.api';

@Injectable()
export class APODService {
  constructor(private readonly apodApi: APODApi) {}

  async getAPOD(query) {
    const response = await this.apodApi.getAPOD(query);
    return response;
  }

  async updateAPOD() {
    await this.apodApi.deleteAPODS();
    const date = new Date();
    const stringDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;

    const data = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=HSQg2IZMuBBelkbTvL0FJHLtdCv6BwmfUsWPYoLy&date=${stringDate}`,
    );
    await this.apodApi.updateAPOD({
      title: data.data.title,
      url: data.data.url,
      explination: data.data.explination,
      date: data.data.date,
      media: data.data.media_type,
    });
  }
}
