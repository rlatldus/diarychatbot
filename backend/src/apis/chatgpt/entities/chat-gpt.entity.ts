import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { User } from "src/apis/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum sticker_color {
    scarlet = '#dfb1a3',
    gray = '#A5A2AA',
    orange = '#F3AC7F'
}

registerEnumType(sticker_color, {
    name: 'sticker_color',
});

@Entity()
@ObjectType()
export class ChatGPT {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    ask: string;

    @Column({type: 'enum', enum: sticker_color, default: sticker_color.scarlet})
    @Field(() => String)
    sticker_color: string;

    @Column({length: 600})
    @Field(() => String)
    answer: string;

    @Column({default: 0})
    @Field(() => Number)
    score: number;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @UpdateDateColumn()
    @Field(() => Date)
    updatedAt: Date;

    
}