import { Controller, Post, Param, UseGuards,UsePipes } from '@nestjs/common';
import { Body, Delete, Get, Patch } from '@nestjs/common/decorators/http';
import { ScoutDto } from './Dto/scout.dto';
import { ScoutService } from './scout.service';
import { UpdatescoutDto } from './Dto/updateDto';
import { ScoutGuard } from './scout.gaurd';
import { scoutRole } from './Dto/enum';
import { PhoneNoPipe } from './scout.pipe';

@Controller('scout')
export class ScoutController {
  constructor(private scoutService: ScoutService) {}
  @Post('create')
  @UsePipes(new PhoneNoPipe())
  create(@Body() scoutDto: ScoutDto) {
    console.log('scoutDto : ', scoutDto);
    return this.scoutService.create(scoutDto);
  }

  @Get('find/:role')
  @UseGuards(new ScoutGuard())
  getScout(@Param('role') role: scoutRole) {
    return this.scoutService.findAll();
  }

  @Get('find/:id')
  getOneScout(@Param('id') id: string) {
    return this.scoutService.findById(id);
  }

  @Patch('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updatescoutDto: UpdatescoutDto,
  ): Promise<ScoutDto> {
    const updatedUser = await this.scoutService.update(id, updatescoutDto);
    console.log(updatescoutDto);
    return updatedUser;
  }

  @Delete('delete/:id')
  deleteScout(@Param('id') id: string) {
    console.log('delete succesfully');
    return this.scoutService.delete(id);
  }
}
