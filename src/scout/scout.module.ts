import { Module, NestModule, MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { ScoutController } from './scout.controller';
import { ScoutService } from './scout.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Scout, ScoutSchema } from './scout.schema';
import { idValidationMiddleWare } from './scoutMiddleware/middleWare'; // Import the middleware here

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scout.name, schema: ScoutSchema }])
  ],
  controllers: [ScoutController],
  providers: [ScoutService]
})
export class ScoutModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(idValidationMiddleWare)
      .exclude(
        { path: 'scout/create', method: RequestMethod.POST },
        { path: 'scout/find/:role', method: RequestMethod.GET },
      )
      .forRoutes(ScoutController);
  }
}
