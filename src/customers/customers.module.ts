import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleWare } from './middlewares/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ValidateCustomerMiddleware).forRoutes({
    //   path:'customers/search/:id',
    //   method:RequestMethod.GET,
    // })

    // consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersController)

    consumer.apply(ValidateCustomerMiddleware,ValidateCustomerAccountMiddleWare,(req:Request,res:Response,next:NextFunction)=>{
      console.log("last middleware")
      next();
    })
            .exclude({
                  path:'customers/search/:id',
                  method:RequestMethod.GET,
            })
            .forRoutes(CustomersController)
  }
}
