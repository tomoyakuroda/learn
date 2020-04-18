import {IsNotEmpty} from 'class-validator';

export class PathDto {
    
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    description:string;

};