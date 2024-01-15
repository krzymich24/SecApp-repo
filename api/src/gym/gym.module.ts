import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { gymProvider } from "./gym.provider";
import { DatabaseModule } from "../database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [GymController],
  providers: [...gymProvider, GymService]
})
export class GymModule {}
