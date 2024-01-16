import { Inject, Injectable } from '@nestjs/common';
import { RouteSetterDto } from './route-setter.dto';
import { Repository } from 'typeorm';
import { RouteSetter } from './route-setter.entity';
import { ROUTE_SETTER_REPO } from './route-setter.provider';

@Injectable()
export class RouteSetterService {
  constructor(
    @Inject(ROUTE_SETTER_REPO)
    private gymRepository: Repository<RouteSetter>,
  ) {}

  create(dto: RouteSetterDto) {
    return this.gymRepository.insert({});
  }

  listAllByGym(gymId: string) {
    return this.gymRepository.findBy({ gym: gymId });
  }

  remove({ gym, person }: RouteSetterDto) {
    return this.gymRepository.delete({ gym, person });
  }
}
