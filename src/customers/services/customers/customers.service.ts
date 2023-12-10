import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
        users=[ 
            {
                id:1,
                email:"unkothalawala@gmail.com",
                createdAt:new Date(),
            },
            {
                id:2,
                email:"ganesh@gmail.com",
                createdAt:new Date(),
            },
            {
                id:3,
                email:"nuwan@gmail.com",
                createdAt:new Date(),
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
}
