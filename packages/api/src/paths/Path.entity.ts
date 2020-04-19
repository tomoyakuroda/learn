import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from '../User/User.entity';



@Entity()
@Unique(['name'])
export class PathLesson {

    @PrimaryGeneratedColumn()    
    id: string;

    @Column()    
    name: string;

    @Column()    
    icon: string;

    @Column()    
    description: string;

    @CreateDateColumn()    
    createAt: Date;

    @ManyToOne(_type => User, user => user.paths, {eager:false})

    @Column()
    users:string;
};