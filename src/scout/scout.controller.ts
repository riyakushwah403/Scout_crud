import { Controller, Post, Param } from '@nestjs/common';
import { Body, Delete, Get, Patch } from '@nestjs/common/decorators/http';
import { ScoutDto } from './Dto/scout.dto';
import { ScoutService } from './scout.service';
import { UpdatescoutDto } from './Dto/updateDto';
@Controller('scout')
export class ScoutController {
    constructor(private scoutService: ScoutService) { }
    @Post('create')
    create(@Body() scoutDto: ScoutDto) {
        console.log('scoutDto : ', scoutDto);
        return this.scoutService.create(scoutDto);
    }

    @Get('find')
    getScout() {
        return this.scoutService.findAll()
    }

    @Get('find/:id')
    getOneScout(@Param('id') id: string) {
        return this.scoutService.findById(id)
    }

    @Patch('update/:id')
    async updateUser(@Param('id') id: string, @Body() updatescoutDto: UpdatescoutDto): Promise<ScoutDto> {
        const updatedUser = await this.scoutService.update(id, updatescoutDto);
        console.log(updatescoutDto)
        return updatedUser;
    }

    @Delete('delete/:id')
    deleteScout(@Param('id') id: string) {
        console.log('delete succesfully')
        return this.scoutService.delete(id)
    }

}
