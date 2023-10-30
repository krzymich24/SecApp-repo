import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  NotFoundException,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { sign } from 'jsonwebtoken';
import { LYRICS } from '../constants';

@Controller('person')
export class PersonController {
  private readonly logger = new Logger(PersonController.name);

  constructor(private readonly service: PersonService) {}

  @Get()
  async getAll(): Promise<Person[]> {
    return this.service.findAll();
  }

  @Post()
  async init(): Promise<Person> {
    const person = new Person();
    person.username = 'admin';
    person.password = 'admin';
    return this.service.addOne(person);
  }

  @Put('login')
  async login(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    this.logger.debug(`Username: ${username}, Password: ${password}`);
    const matching = await this.service.findOneByUsername(username);

    if (!matching || password !== matching.password) {
      this.logger.error(
        `[${HttpStatus.NOT_FOUND}] Login failed for '${username}': bad password or '${username}' doesn't exits.`,
      );
      throw new NotFoundException(
        `Login failed for '${username}': bad password or '${username}' doesn't exits.`,
      );
    }
    this.logger.debug(
      `Matching: ${matching.username}, Password: ${matching.password}`,
    );
    return sign({ username, password }, LYRICS);
  }
}
