import { Inject, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { ROUTE_REPO } from './route.provider';

@Injectable()
export class RouteService {
  constructor(
    @Inject(ROUTE_REPO)
    private repo: Repository<Route>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    return this.repo.find();
  }

  findAllForGym(gym: string) {
    return this.repo.findBy({ author: { gym: { id: gym } } });
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
