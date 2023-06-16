import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsEmail()
    @Field(() => String)
    email: string;

    @Length(3, 20)
    @IsNotEmpty()
    @Field(() => String)
    password: string;

    @Field(() => String)
    name: string;
}
