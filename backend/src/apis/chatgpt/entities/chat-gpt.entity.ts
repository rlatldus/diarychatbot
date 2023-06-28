import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum sticker_color {
    scarlet = '#dfb1a3',
    gray = '#A5A2AA',
    orange = '#F3AC7F',
}

registerEnumType(sticker_color, {
    name: 'sticker_color',
});

@Entity()
@ObjectType()
export class ChatGPT {
    // 일기의 id
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    // 일기의 제목
    @Column()
    @Field(() => String)
    title: string;
    // 일기의 내용
    @Column()
    @Field(() => String)
    ask: string;
    // 일기 스티커 컬러
    @Column({
        type: 'enum',
        enum: sticker_color,
        default: sticker_color.scarlet,
    })
    @Field(() => String)
    color: string;
    // 일기의 답변 (gpt)
    @Column({ length: 600 })
    @Field(() => String)
    answer: string;
    // 일기의 점수
    @Column({ default: 0 })
    @Field(() => Number)
    score: number;
    // 유저와 일대다 관계
    @ManyToOne(() => User)
    @Field(() => User)
    user: User;
    // 일기의 생성일
    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;
    // 일기의 삭제일
    @DeleteDateColumn()
    deletedAt: Date;
    // 일기의 수정일
    @UpdateDateColumn()
    @Field(() => Date)
    updatedAt: Date;
}
