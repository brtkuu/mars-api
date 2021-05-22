import { Controller, Get, Patch } from '@nestjs/common';
import { APODService } from './apod.service';

@Controller('photos')
export class APODController {
  constructor(private readonly APODService: APODService) {}
}
