import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AsignaturaService } from './asignatura.service';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { competenciaAsignatura } from './dto/competencia-asignatura.dto';
import { JwtAuthGuard } from 'src/user/guardjwt';

@ApiTags('asignatura')
@Controller('asignatura')
@UseGuards(JwtAuthGuard)
export class AsignaturaController {
  constructor(private readonly asignaturaService: AsignaturaService) {}

  @Post()
  create(@Body() createAsignaturaDto: CreateAsignaturaDto) {
    return this.asignaturaService.create(createAsignaturaDto);
  }

  @Get('/docasi/:id')
  asignaturaToDocente(@Param('id') id: string){
    return this.asignaturaService.findAsignaturaDocenteOne(id)
  }

  @Get()
  findAll() {
    return this.asignaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignaturaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsignaturaDto: UpdateAsignaturaDto,
  ) {
    return this.asignaturaService.update(+id, updateAsignaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignaturaService.remove(+id);
  }
}
