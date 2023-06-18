import { InputType, PartialType } from '@nestjs/graphql';
import { CreateBoardInput } from './createBoard.input';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {}

//partialType null 허용
//pickType 고르고 싶은것만
//omitType 제거
