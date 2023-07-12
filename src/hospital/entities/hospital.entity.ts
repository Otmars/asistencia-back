import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ubicacion: string;

  @Column()
  descripcion: string;

  @OneToMany(()=>Asignatura, (asignatura)=>asignatura.hospitalid)
  asignatura : Asignatura[]
}
