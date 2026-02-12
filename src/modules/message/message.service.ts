import { Injectable } from '@nestjs/common';
import { MessageRepository } from './repositories/message.repository';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
    messageRepo : MessageRepository;

    constructor(){
        this.messageRepo = new MessageRepository()
    }

    findOne(id:string){
      return this.messageRepo.findOne(id)
    }

    findAll(){
        return this.messageRepo.findAll()
    }

    create(content: CreateMessageDto){
        return this.messageRepo.create(content)
    }
}
