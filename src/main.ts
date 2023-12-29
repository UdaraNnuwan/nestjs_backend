import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import { TypeormStore } from 'connect-typeorm'
import { SessionEntity } from './typeorm/Session';
import {  getRepository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository=getRepository(SessionEntity)
  app.setGlobalPrefix('api')
  app.use(session({
    name:"Nest_js_session_id",
    secret:"UdaeaSesstion",
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:60000,
    },
    // store:new TypeormStore({
    //   cleanupLimit:10,
    // }).connect(sessionRepository),
    store:new TypeormStore().connect(sessionRepository),
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(5002);
}
bootstrap();
