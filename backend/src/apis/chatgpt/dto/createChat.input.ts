import { Field, InputType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { sticker_color } from '../entities/chat-gpt.entity';

@InputType()
export class createChatInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    ask: string;

    @IsEnum(sticker_color)
    @Field(() => sticker_color)
    color: sticker_color;
}
