import { Field, InputType } from '@nestjs/graphql';
import { BOARD_PRIVATE } from '../entities/board.entity';

// graphql input type
@InputType()
export class CreateBoardInput {
    @Field(() => String)
    writer: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    contents: string;

    @Field(() => BOARD_PRIVATE)
    status: BOARD_PRIVATE;

    @Field(() => String)
    boardCategoryId: string;

    @Field(() => [String])
    boardTags: string[];
}
