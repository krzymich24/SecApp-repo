import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { PERSON_REPO } from "./person.provider";

@Injectable()
export class PersonService {
  constructor(
    @Inject(PERSON_REPO)
    private personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async addOne(person: Person) {
    return this.personRepository.save(person);
  }
}
