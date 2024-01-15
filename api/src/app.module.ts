import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { GymModule } from './gym/gym.module';
import { RouteModule } from './route/route.module';

@Module({
  imports: [PersonModule, GymModule, RouteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
