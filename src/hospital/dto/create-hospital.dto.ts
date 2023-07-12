import { ApiProperty } from '@nestjs/swagger';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';

export class CreateHospitalDto {
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  ubicacion: string;

  @ApiProperty()
  descripcion: string;

}
