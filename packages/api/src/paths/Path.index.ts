import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PathLesson } from './Path.entity';
import { PathResolver } from './Path.resolver';
import { PathService } from './Path.service';

@Module({
    imports:[TypeOrmModule.forFeature([PathLesson])],
    providers:[PathResolver, PathService]
})
export class PathModule {}