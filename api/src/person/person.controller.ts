import { Controller, Get, Post } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly service: PersonService) {}

  @Get()
  async getAll(): Promise<Person[]> {
    return this.service.findAll();
  }

  @Post()
  async postOne(): Promise<Person> {
    const newPerson = new Person();
    newPerson.fullName = 'Jane Doe';
    newPerson.gender = 'F';
    newPerson.phone = '5555555555';
    newPerson.age = 29;
    return this.service.addOne(newPerson);
  }
}
