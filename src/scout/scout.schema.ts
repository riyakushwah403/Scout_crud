import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { scoutRole } from './Dto/enum';

export type ScoutDocument = Scout & Document;

@Schema()
export class Scout {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    phoneNo: string;

    @Prop({required: true})
    dateOfBirth: Date;

    @Prop({required:true})
    dateOfJoin:Date;

    @Prop({required:true})
    qualification: string[];

    @Prop({required:false})
    role: scoutRole;

    @Prop({default:10})
    stipened:number;

    @Prop({required:true})
    trained:boolean;
}

export const ScoutSchema = SchemaFactory.createForClass(Scout);
