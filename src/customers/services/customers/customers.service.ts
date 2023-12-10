import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
       private users:Customer[]=[ 
            {
                id:1,
                email:"unkothalawala@gmail.com",
                name:"Udara Nuwan"
            },
            {
                id:2,
                email:"ganesh@gmail.com",
                name:"Ganesh Tharanga"
            },
            {
                id:3,
                email:"nuwan@gmail.com",
                name:"Nuwan"
            }
        ]
    findCustomer(){
            // return {
            //     id:'1',
            //     email:"unkothalawala@gmail.com",
            //     createdAt:new Date(),
            // }

            return this.users;
    }
    findCustomerById(id:number){
        return this.users.find((user)=>user.id===id)
    }

    createCustomer(customerDto:CreateCustomerDto){
        this.users.push(customerDto)
    }
}
