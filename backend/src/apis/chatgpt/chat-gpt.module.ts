import { Module } from '@nestjs/common';
import { ChatGPTService } from './chat-gpt.service';
import { ChatGPTResolver } from './chat-gpt.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGPT } from './entities/chat-gpt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatGPT])],
  controllers: [],
  providers: [ChatGPTService, ChatGPTResolver],
})
export class ChatGPTModule {}
