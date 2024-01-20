import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { RouteSetterService } from '../route-setter/route-setter.service';
import { RouteSetterDto } from '../route-setter/route-setter.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Credentials } from '../auth/credentials.decorator';
import { Person } from '../person/person.entity';

@Controller('gym')
export class GymController {
  constructor(
    private readonly gymService: GymService,
    private readonly routeSetterService: RouteSetterService,
  ) {}

  @Post()
  create(@Body() createGymDto: CreateGymDto) {
    return this.gymService.create(createGymDto);
  }

  @Get()
  findAll() {
    return this.gymService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':gymId/assign/:personId')
  assign(
    @Param('gymId') gymId: string,
    @Param('personId') personId: string,
    @Credentials() credentials: Person,
  ) {
    if (!credentials?.isAdmin)
      throw new UnauthorizedException('Not allowed to access this route');
    return this.routeSetterService.create(gymId, personId);
  }

  @Delete(':gymId/assign/:personId')
  unAssign(
    @Param('gymId') gymId: string,
    @Param('personId') personId: string,
    @Credentials() credentials: Person,
  ) {
    if (!credentials?.isAdmin)
      throw new UnauthorizedException('Not allowed to access this route');

    return this.routeSetterService.remove(gymId, personId);
  }

  @Get(':id/person')
  listRouteSetters(@Param('id') id: string) {
    console.warn(`gym/${id}/person`);
    return this.routeSetterService.listAllByGym(id);
  }
}
