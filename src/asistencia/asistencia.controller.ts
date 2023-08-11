import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/user/guardjwt';
@ApiTags('asistencia')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}
  

  @Post()
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaService.create(createAsistenciaDto);
  }

  @Get()
  findAll() {
    return this.asistenciaService.findAll();
  }


  @Get(':id/last')
  findOneLast(@Param('id') id: string) {
    return this.asistenciaService.findOneLast(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenciaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciaService.update(+id, updateAsistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenciaService.remove(+id);
  }
}
