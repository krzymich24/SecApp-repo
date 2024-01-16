import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { routeProvider } from './route.provider';
import { DatabaseModule } from "../database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [...routeProvider, RouteService],
})
export class RouteModule {}
