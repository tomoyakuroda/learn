import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
@Unique(['name'])
export class PathLesson {

    @PrimaryGeneratedColumn()
    @Field(()=> ID)
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    icon: string;

    @Column()
    @Field()
    description: string;

    @CreateDateColumn()
    @Field()
    createAt: Date;
};