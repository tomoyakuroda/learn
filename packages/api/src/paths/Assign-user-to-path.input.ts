import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class AssignUserToPathInput {
    @Field(_type => ID)
    pathId:string;
    
    @Field(_type => [ID])
    userId:string[];
};