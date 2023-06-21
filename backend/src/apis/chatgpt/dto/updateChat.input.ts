import { InputType, PartialType } from '@nestjs/graphql';
import { createChatInput } from './createChat.input';

@InputType()
export class UpdateChatInput extends PartialType(createChatInput) {}
