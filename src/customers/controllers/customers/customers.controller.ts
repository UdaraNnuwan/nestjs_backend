import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService:CustomersService){}
    @Get('')
    getCustomer(){
        //controller handling all the business logic 
        // return {
        //     id:'1',
        //     email:"unkothalawala@gmail.com",
        //     createdAt:new Date(),
        // }

        return this.customersService.findCustomer();

    }
}
