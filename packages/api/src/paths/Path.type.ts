import { ObjectType, Field } from "@nestjs/graphql";
import { User } from '../User/User.entity';

@ObjectType()
export class PathType {
    @Field()
    id:string;

    @Field()
    name:string;

    @Field()
    icon:string;

    @Field()
    createAt:string;

    @Field(_type => [User])
    users:string;

};