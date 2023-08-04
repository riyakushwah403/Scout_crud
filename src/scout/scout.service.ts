import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { Scout, ScoutDocument } from './scout.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ScoutDto } from './Dto/scout.dto';
import { UpdatescoutDto } from './Dto/updateDto';
import { InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class ScoutService {

  constructor(@InjectModel(Scout.name) private readonly scoutModel: Model<ScoutDocument>) { }

  async create(scout: ScoutDto): Promise<Scout> {
    const newScout = new this.scoutModel(scout);
    return newScout.save();
  }
  async findAll(): Promise<Scout[]> {
    return this.scoutModel.find().exec()
  }

  async findById(id: string): Promise<Scout> {
    const scout = await this.scoutModel.findById(id).exec();
    if (!scout) {
      throw new NotFoundException(`Scout with ID  not found.`);
    }
    return scout;
  }
  async update(id: string, updatescoutDto: UpdatescoutDto): Promise<Scout> {
    const updatedScout = await this.scoutModel.findByIdAndUpdate(id, updatescoutDto, {
      new: true,
    }).exec();
    if (!updatedScout) {
      throw new NotFoundException(`Scout with That  ${id}Id is Not Found`)
    } else {
      return updatedScout;
    }
  }

  async delete(id: string): Promise<string> {
    const deletedScout = await this.scoutModel.findByIdAndRemove(id).exec();
    if (!deletedScout) {
      throw new NotFoundException('Scout with That ${id} Id is not  found')
    } else {
      return "user delete successfully"
    }
 }
}