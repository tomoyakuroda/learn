import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PathLesson } from './Path.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PathService {
    constructor(@InjectRepository(PathLesson) private PathRepository:Repository<PathLesson>){};

    async getPath():Promise<PathLesson[]>{
        const result = await  this.PathRepository.find()

        return result
    };

};