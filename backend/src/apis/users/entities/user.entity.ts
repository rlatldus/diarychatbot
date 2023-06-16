import { Field, ObjectType } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    email: string;

    @Column()
    // @Field(() => String) // 조회 방지
    password: string;

    @Column()
    @Field(() => String)
    name: string;

    // @Column({ default: 0 })
    // @Field(() => Int)
    // point: number;

    @DeleteDateColumn()
    deletedAt: Date;
    @CreateDateColumn()
    createdAt: Date;
}
