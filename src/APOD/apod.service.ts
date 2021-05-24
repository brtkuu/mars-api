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
    for (let i = 0; i < 7; i++) {
      const date = new Date(new Date().getTime() - i * 86400000);
      const stringDate = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;

      const data = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=HSQg2IZMuBBelkbTvL0FJHLtdCv6BwmfUsWPYoLy&date=${stringDate}`,
      );
      await this.apodApi.updateAPOD({
        title: data.data.title,
        hdurl: data.data.hdurl,
        explination: data.data.explination,
        date: data.data.date,
      });
    }
  }
}
