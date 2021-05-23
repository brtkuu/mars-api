import { Controller, Get, Patch, Query } from '@nestjs/common';
import { APODService } from './apod.service';

@Controller('apod')
export class APODController {
  constructor(private readonly apodService: APODService) {}

  @Get()
  async getAPOD(@Query() query): Promise<string> {
    return JSON.stringify(await this.apodService.getAPOD(query));
  }

  @Patch()
  updateAPOD() {
    this.apodService.updateAPOD();
  }
}
