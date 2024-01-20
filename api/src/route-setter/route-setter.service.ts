import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RouteSetter } from './route-setter.entity';
import { ROUTE_SETTER_REPO } from './route-setter.provider';
import { ResultAsync } from 'typescript-functional-extensions';

@Injectable()
export class RouteSetterService {
  constructor(
    @Inject(ROUTE_SETTER_REPO)
    private gymRepository: Repository<RouteSetter>,
  ) {}

  create(gymId: string, userId: string) {
    return this.gymRepository.insert({
      gym: () => gymId,
      person: () => userId,
    });
  }

  async verify(gym: string, person: string) {
    return await ResultAsync.try(
      () =>
        this.gymRepository.countBy({
          gym: { id: gym },
          person: { id: person },
        }),
      (error) => `No route-setter ${person} found for gym ${gym}: ${error}`,
    )
      .ensure(
        (result) => result === 1,
        (result) =>
          `There were ${result} results for person ${person} and gym ${gym}`,
      )
      .match({
        success: () => true,
        failure: (e) => {
          console.error(e); // fixme: nest logger
          return false;
        },
      });
  }

  async listAllByGym(gymId: string) {
    const ppl = await this.gymRepository.findBy({ gym: { id: gymId } });
    console.log(ppl);
    return ppl;
  }

  remove(gymId: string, userId: string) {
    return this.gymRepository.delete({
      gym: { id: gymId },
      person: { id: userId },
    });
  }
}
