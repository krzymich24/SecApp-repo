import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ObjectId, Repository } from 'typeorm';
import { Person } from './person.entity';
import { PERSON_REPO } from './person.provider';
import { Maybe } from 'typescript-functional-extensions';

@Injectable()
export class PersonService {
  constructor(
    @Inject(PERSON_REPO)
    private personRepository: Repository<Person>,
  ) {}

  async activate(id: number | string | ObjectId) {
    const actions = Maybe.from(
      await this.personRepository.findOneBy({ id: id + '' }),
    ).map(({ actions }) => actions);
    return this.personRepository.update(id, {
      isActive: true,
      actions: actions.getValueOrThrow() + 1,
    });
  }

  async resetPassword(
    id: number | string | ObjectId,
    password: string,
    counter: number,
  ) {
    const actions = Maybe.from(
      await this.personRepository.findOneBy({ id: id + '' }),
    )
      .map(({ actions }) => actions)
      .getValueOrThrow();

    console.warn({ counter, actions });
    if (actions !== counter)
      throw new UnauthorizedException(
        `Token is not valid for the operation you're trying to perform`,
      );
    await this.personRepository.update(id, {
      isActive: true,
      password,
      actions: actions + 1,
    });
    return;
  }

  async deactivate(id: number | string | ObjectId) {
    const actions = Maybe.from(
      await this.personRepository.findOneBy({ id: id + '' }),
    ).map(({ actions }) => actions);
    return this.personRepository.update(id, {
      isActive: false,
      actions: actions.getValueOrThrow() + 1,
    });
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async addOne(person: Person) {
    return this.personRepository.save(person);
  }

  async findOneByUsername(username: string) {
    return this.personRepository.findOneBy({ username });
  }

  async findOneByEmail(email: string) {
    return this.personRepository.findOneBy({ email });
  }
}
