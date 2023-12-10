import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
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
    //experess method
    @Get(':id')
    getCustomerById(
        @Param('id',ParseIntPipe) id:number,
        @Req() req:Request, 
        @Res() res:Response)
        {
            // console.log(typeof id)
            const customer= this.customersService.findCustomerById(id)
            if(customer){
                res.send(customer)
            }else{
                res.status(400).send({message:"Customer Not Found"})
            }
        } 
    
    //nest js method
    @Get('search/:id')
    getSearchCustomerById(@Param('id', ParseIntPipe) id:number){
        const customer = this.customersService.findCustomerById(id);
        if (customer) return customer;
        else throw new HttpException("Customer Not Fonud!!",HttpStatus.BAD_REQUEST);
    }
}
