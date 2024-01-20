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
  UseGuards,
  Request,
} from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { sign, verify } from 'jsonwebtoken';
import { LYRICS } from '../constants';
import { Maybe } from 'typescript-functional-extensions';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Request as Req } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('person')
export class PersonController {
  private readonly logger = new Logger(PersonController.name);

  constructor(private readonly service: PersonService) {}

  // @Post()
  // async init(): Promise<Person> {
  //   const person = new Person();
  //   person.username = 'admin';
  //   person.password = 'admin';
  //   person.email = 'admin@adm.in';
  //   person.isAdmin = true;
  //   person.isActive = true;
  //   return this.service.addOne(person);
  // }

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

  @UseGuards(LocalAuthGuard)
  @Put('login')
  async login(@Request() req: Req) {
    this.logger.debug(`User: ${req.user}`);
    return sign(req.user, LYRICS);
  }
}
