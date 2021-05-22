import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { APODApi } from './apod.api';

@Injectable()
export class APODService {
  constructor(private readonly APODApi: APODApi) {}
}
