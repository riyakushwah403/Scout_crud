import { Module } from '@nestjs/common';
import { ScoutController } from './scout.controller';
import { ScoutService } from './scout.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Scout, ScoutSchema } from './scout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scout.name, schema: ScoutSchema }])
  ],
  controllers: [ScoutController],
  providers: [ScoutService]
})
export class ScoutModule { }
