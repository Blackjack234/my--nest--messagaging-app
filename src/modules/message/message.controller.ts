import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
    @Get()
    listMessage(){
        return "this is the message"
    }

    @Post()
    
    postMessage(@Body()body:CreateMessageDto){
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
