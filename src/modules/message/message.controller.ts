import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(public messageService:MessageService){
    }

    @Get()
    listMessage(){
        return this.messageService.findAll()
    }

    @Post()
    
    postMessage(@Body()body:CreateMessageDto){
       return this.messageService.create(body)
    }

    @Get("/:id")
    async GetMessage(@Param('id') id:string){

       const message = await this.messageService.findOne(id)

       if(!message){
          throw new NotFoundException('Message not found.')
       }

       return message
    }
}
