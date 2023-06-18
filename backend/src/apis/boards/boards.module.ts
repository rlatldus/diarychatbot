import { Board } from './entities/board.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './boards.service';
import { BoardTag } from '../boardTag/entities/boardTag.entity';
import { BoardCategory } from '../boardCategory/entities/boardCategory.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Board, BoardCategory, BoardTag])],
    providers: [BoardResolver, BoardService],
})
export class BoardModule {}
