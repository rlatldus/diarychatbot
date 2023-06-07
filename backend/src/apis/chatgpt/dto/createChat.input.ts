import { Field, InputType } from "@nestjs/graphql";
import { sticker_color } from "../entities/chat-gpt.entity";

@InputType()
export class createChatInput {

    @Field(() => String)
    title: string;

    @Field(() => String)
    ask: string;

    @Field(() => sticker_color)
    stickerColor: sticker_color;
    
  }