import { ApiProperty } from '@nestjs/swagger';
import { Docente } from 'src/docente/entities/docente.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';

export class CreateAsignaturaDto {

  id: number;

  @ApiProperty(
    {description: 'nombre de la asignatura o materia'})
  nombre: string;

  @ApiProperty()
  siglaCodigo: string;

  @ApiProperty()
  cargaHoraria: number;

  // @ApiProperty()
  // RegNivelEst: string;

  @ApiProperty()
  nMeses: number;

  // @ApiProperty()
  // prerequisito: string;

  @ApiProperty()
  paralelo: string;

  @ApiProperty()
  docente: Docente;

  @ApiProperty()
  hospital: Hospital;
}
