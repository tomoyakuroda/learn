import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PathLesson } from './Path.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PathService {
    constructor(@InjectRepository(PathLesson) private pathRepository:Repository<PathLesson>){};

    getPath(id:string):Promise<PathLesson | undefined>{
        return this.pathRepository.findOne({id})
    }
    
    async assignUserToPath(pathId:string, userId:string[]):Promise<PathLesson>{
        const path = await this.pathRepository.findOne({id: pathId});
        
        if(path === undefined){
            throw new Error('undefined');
        }
        
        path.users = [...path.users, ...userId]
        return this.pathRepository.save(path);
        
    };

};