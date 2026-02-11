import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    listMessage(){
        return "this is the message"
    }

    @Post()
    
    postMessage(@Body()body:any){
       return {
        body
       }
    }

    @Get("/:id")
    GetMessage(@Param('id') id:string){
       return {
        id
       }
    }
}
