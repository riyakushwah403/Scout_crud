import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoutModule } from './scout/scout.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ScoutModule, MongooseModule.forRoot('mongodb://localhost:27017/scout')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
