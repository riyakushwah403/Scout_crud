import { Module,NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoutModule } from './scout/scout.module';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './scout/database.config';
import { ScoutController } from './scout/scout.controller';
import { idValidationMiddleWare } from './scout/middleWare';
import { ScoutGuard } from './scout/scout.gaurd';
@Module({
  imports: [ScoutModule, MongooseModule.forRoot(databaseConfig.uri)],
  controllers: [AppController],
  providers: [AppService, ScoutGuard],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(idValidationMiddleWare)
    .exclude(
      { path: 'scout/create', method: RequestMethod.POST },
      { path: 'scout/find', method: RequestMethod.GET },
   
    )
    .forRoutes(ScoutController);
  }
}
