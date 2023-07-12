import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { AsignaturaToCompetencia } from './entities/asignaturaCompetencia.entity';
import { Inscripciones } from 'src/estudiante/entities/inscripcionesEstudiante.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignatura,AsignaturaToCompetencia,Inscripciones,Hospital])],
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  exports:[AsignaturaService]
})
export class AsignaturaModule {}
