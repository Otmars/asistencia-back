import { Asignatura } from 'src/asignatura/entities/asignatura.entity';

export class CreateHospitalDto {
  id: number;

  nombre: string;

  ubicacion: string;

  descripcion: string;

  asignatura = Asignatura;
}
