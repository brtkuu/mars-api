import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APODApi } from './apod.api';
import { APODController } from './apod.controller';
import { APODService } from './apod.service';
import { APOD, APODSchema } from './schemas/apod.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: APOD.name, schema: APODSchema }]),
  ],
  controllers: [APODController],
  providers: [APODService, APODApi],
})
export class APODModule {}
