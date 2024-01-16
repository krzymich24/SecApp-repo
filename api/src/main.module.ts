import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { GymModule } from './gym/gym.module';
import { RouteModule } from './route/route.module';

@Module({
  imports: [PersonModule, GymModule, RouteModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
