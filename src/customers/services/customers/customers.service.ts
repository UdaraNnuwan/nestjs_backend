import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer(){
            return {
                id:'1',
                email:"unkothalawala@gmail.com",
                createdAt:new Date(),
            }
    }
}
