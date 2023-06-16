import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './createUser.dto';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    //
}
