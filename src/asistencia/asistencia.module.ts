import { Module } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { AsistenciaController } from './asistencia.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';

@Module({
  imports:[HttpModule,TypeOrmModule.forFeature([Asistencia,Asignatura])],
  controllers: [AsistenciaController],
  providers: [AsistenciaService]
})
export class AsistenciaModule {}
