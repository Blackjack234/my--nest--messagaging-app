import { Injectable } from "@nestjs/common";

import { readFile, writeFile } from "fs/promises";
import { CreateMessageDto } from "../dto/create-message.dto";

@Injectable()
export class MessageRepository{
  async findOne(id:string){
   const content = await readFile('message.json','utf8')
   const message = JSON.parse(content)

   return message[id]
  } 
  
  async findAll(){
    const content = await readFile('message.json','utf8')
    const message = JSON.parse(content)

    return message
  }

    async create(messages: CreateMessageDto){
    const contents = await readFile('message.json','utf8')
    const message = JSON.parse(contents)

    const id = Math.floor(Math.random() * 999)

    message[id] = {id,content:messages.content}

     await writeFile('message.json',JSON.stringify(message))

     const updatedFile = await readFile('message.json','utf8')
     const updatedMessageFile = JSON.parse(updatedFile)

     return {
        message:'file has been updated.',
         data: updatedMessageFile
     } 
  }
}