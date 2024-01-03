import {
  BadGatewayException,
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
import { sign, verify } from 'jsonwebtoken';
import { LYRICS } from '../constants';
import { Maybe } from 'typescript-functional-extensions';

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
    person.email = 'admin@adm.in';
    person.isAdmin = true;
    person.isActive = true;
    return this.service.addOne(person);
  }

  @Post('/register')
  async register(
    @Query('email') email: string,
    @Query('username') username: string,
    @Query('password') password: string,
  ): Promise<string> {
    const person = new Person();
    person.username = username;
    person.password = password;
    person.email = email;
    const created = await this.service.addOne(person);
    const otp = sign({ canActivate: created.id }, LYRICS);
    this.logger.verbose(
      `Account activation OTP for user#${created.id}: ${otp}`,
    );
    return otp;
  }

  @Put('/activate')
  async activate(@Query('otp') otp: string) {
    const token = verify(otp, LYRICS);
    const userId = Maybe.from(token['canActivate']);

    this.logger.verbose(
      `Account activation attempted for ${userId.getValueOrDefault('???')}`,
    );

    if (userId.hasNoValue) throw new NotFoundException();
    await this.service.activate(userId.getValueOrThrow());

    return;
  }

  @Post('/forgotten')
  async forgottenPassword(@Query('email') email: string) {
    this.logger.debug(`email=${email}, ${decodeURIComponent(email)}`);
    const user = await this.service.findOneByEmail(email);

    if (email !== user.email)
      throw new BadGatewayException(`${email} is not ${user.email}`);

    await this.service.deactivate(user.id);

    const otp = sign({ canReset: user.id }, LYRICS);

    this.logger.verbose(`Password reset OTP for user#${user.id}: ${otp}`);

    return otp;
  }

  @Put('/reset')
  async reset(@Query('otp') otp: string, @Query('password') password: string) {
    const token = verify(otp, LYRICS);
    const userId = Maybe.from(token['canReset']);

    this.logger.verbose(
      `Password reset attempted for ${userId.getValueOrDefault('???')}`,
    );

    if (userId.hasNoValue) throw new NotFoundException();

    await this.service.resetPassword(userId.getValueOrThrow(), password);

    return;
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
