import {
  Controller,
  Post,
  Param,
  UseGuards,
  UsePipes,
  UseInterceptors,
} from '@nestjs/common';
import { Body, Delete, Get, Patch } from '@nestjs/common/decorators/http';
import { ScoutDto } from './Dto/scout.dto';
import { ScoutService } from './scout.service';
import { ScoutGuard } from './scoutGuard/scout.gaurd';
import { scoutRole } from './Enum/enum';
import { PhoneNoPipe } from './scoutPipe/scout.pipe';
import { UpdateScoutDto } from './Dto/updateDto';
import { LoginInterceptor } from './scoutInterceptor/scoutIntercepter';
import {
  ApiTags,
  ApiBody,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiUnprocessableEntityResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { create } from 'domain';

@ApiTags('Scout')
@Controller('scout')
export class ScoutController {
  constructor(private scoutService: ScoutService) {}

  @Post('create')
  @ApiOkResponse({
    // status: 200,
    description: ' added successfully',
  })
  @ApiNotFoundResponse({
    description: 'Resource not found',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Bad Request',
  })
  @ApiBody({
    schema: { title: 'create scout register' },
    type: ScoutDto,
  })
  @UsePipes(new PhoneNoPipe())
  create(@Body() scoutDto: ScoutDto) {
    console.log('scoutDto : ', scoutDto);
    return this.scoutService.create(scoutDto);
  }

  @Get('find/:role')
  @ApiOkResponse({
    description: 'The resources were returned successfully',
  })
  @ApiForbiddenResponse({
    description: 'Unauthorized Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource not found',
  })
  @UseGuards(new ScoutGuard())
  getScout(@Param('role') role: scoutRole) {
    return this.scoutService.findAll();
  }

  @Get('findById/:id')
  @ApiOkResponse({
    description: 'The resources were returned successfully',
  })
  @ApiNotFoundResponse({
    description: 'Resource not found',
  })
  getOneScout(@Param('id') id: string) {
    return this.scoutService.findById(id);
  }

  @Patch('update/:id')
  @ApiOkResponse({
    description: 'The resource was updated successfully',
  })
  @ApiNotFoundResponse({
    description: 'Resource not found',
  })
  @ApiForbiddenResponse({
    description: 'Unauthorized Request',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Bad Request',
  })
  async updateUser(
    @Param('id') id: string,
    @Body() updateScoutDto: UpdateScoutDto,
  ): Promise<ScoutDto> {
    const updatedUser = await this.scoutService.update(id, updateScoutDto);
    console.log(updateScoutDto);
    return updatedUser;
  }

  @Delete('delete/:id')
  @ApiOkResponse({
    description: 'The resource was returned successfully',
  })
  @ApiForbiddenResponse({
    description: 'Unauthorized Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource not found',
  })
  @UseInterceptors(new LoginInterceptor())
  deleteScout(@Param('id') id: string) {
    console.log('delete succesfully');
    return this.scoutService.delete(id);
  }
}
