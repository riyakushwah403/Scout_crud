import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { scoutRole } from '../Enum/enum';

export type ScoutDocument = Scout & Document;

@Schema()
export class Scout {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    email: string;

    @Prop({ required: false })
    location: string;

    @Prop({ required: true })
    phoneNo: number;

    @Prop({required: true})
    dateOfBirth: Date;

    @Prop({required:false})
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
