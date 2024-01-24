import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { GymModule } from './gym/gym.module';
import { RouteModule } from './route/route.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    PersonModule,
    GymModule,
    RouteModule,
    AuthModule,
    MailerModule.forRoot({
      transport: {
        host: 'localhost',
        port: 5025,
        ignoreTLS: true,
        secure: false,
        // auth: {
        //   user: 'boulder-line',
        //   pass: 'boulder-line',
        // },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
