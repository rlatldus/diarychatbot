import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { BoardCategory } from 'src/apis/boardCategory/entities/boardCategory.entity';
import { BoardTag } from 'src/apis/boardTag/entities/boardTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

//공개글 혹은 비공개글 설정
export enum BOARD_PRIVATE {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
//graphql에서 enum으로 사용하기 위해 등록
registerEnumType(BOARD_PRIVATE, {
    name: 'BOARD_PRIVATE',
});

@Entity()
@ObjectType()
export class Board {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    number: number;

    @Column()
    @Field(() => String)
    writer: string;

    //검색을 위해 50자 이내로 제한 -> token 절약
    @Length(1, 50)
    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    contents: string;

    @Column({
        type: 'enum',
        enum: BOARD_PRIVATE,
        default: BOARD_PRIVATE.PUBLIC,
    })
    @Field(() => BOARD_PRIVATE)
    status: string;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    //카테고리 한개에 게시물 여러개 등록가능
    @ManyToOne(() => BoardCategory)
    @Field(() => BoardCategory)
    boardCategory: BoardCategory;

    // 한명의 유저가 여러개의 게시물 등록가능
    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    // 한개의 게시물에 여러개의 태그 등록가능, 여러개의 게시물에 여러개의 태그 등록가능
    @JoinTable()
    @Field(() => [BoardTag])
    @ManyToMany(() => BoardTag, (boardTags) => boardTags.boardTags)
    boardTags: BoardTag[];
}
