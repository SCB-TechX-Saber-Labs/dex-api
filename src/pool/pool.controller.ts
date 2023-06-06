import { Controller, Get, Post, Body,UsePipes, Patch, Param, Delete } from '@nestjs/common';
import { PoolService } from './pool.service';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import {
  ApiBearerAuth, ApiOkResponse, ApiTags
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from '../healper/validation';

@ApiTags('Pools')
@Controller('pools')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: CreatePoolDto })
  @Post()
  async create(@Body() pool: CreatePoolDto) {

    return this.poolService.create(pool);
  }


  @Get()
  findAll() {
    return this.poolService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.poolService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePoolDto: UpdatePoolDto) {
  //   return this.poolService.update(+id, updatePoolDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.poolService.remove(+id);
  // }
}
