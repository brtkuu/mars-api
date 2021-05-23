import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { WeatherModule } from './weather/weather.module';
import { APODModule } from './APOD/apod.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mars-api'),
    WeatherModule,
    PhotosModule,
    APODModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
