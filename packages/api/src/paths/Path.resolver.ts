import { PathService } from "./Path.service";
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { PathType } from "./Path.type";
import { PathLesson } from "./Path.entity";
import { AssignUserToPathInput } from "./Assign-user-to-path.input";

@Resolver('PathLesson')
export class PathResolver {
    constructor(private pathService:PathService){};

    @Query(() => PathType)
    getPath(@Args('id') id:string) {
        this.pathService.getPath(id);
    };
    

    @Mutation(_returns => PathLesson)
    assignUserToPath(@Args('assignUserToPathInput') assignUserToPathInput:AssignUserToPathInput){
        const {pathId, userId} = assignUserToPathInput;
        return this.pathService.assignUserToPath(pathId, userId);
    };

};