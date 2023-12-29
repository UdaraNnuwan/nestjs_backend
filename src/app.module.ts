import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CustomersModule, UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    username:'admin',
    password:'admin1234',
    database:'nestjs_db',
    entities:entities,
    synchronize:true,
  }), AuthModule,
  PassportModule.register({
    session:true
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
