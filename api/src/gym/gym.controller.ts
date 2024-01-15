import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { RouteSetterService } from "../route-setter/route-setter.service";
import { RouteSetterDto } from "../route-setter/route-setter.dto";

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService,
              private readonly routeSetterService: RouteSetterService) {}

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

  @Post('person')
  assign(@Body() dto: RouteSetterDto) {
    return this.routeSetterService.create(dto);
  }

  @Delete('person')
  unAssign(@Body() dto: RouteSetterDto) {
    return this.routeSetterService.remove(dto);
  }

  @Delete(':id/person')
  listRouteSetters(@Body() dto: RouteSetterDto) {
    return this.routeSetterService.listAllByGym(dto);
  }
}
