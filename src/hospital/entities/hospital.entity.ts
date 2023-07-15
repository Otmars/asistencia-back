import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({type: "decimal"})
  latitud: number;

  @Column({type: "decimal"})
  longitud: number;

  @Column()
  descripcion: string;

  @OneToMany(()=>Asignatura, (asignatura)=>asignatura.hospital)
  asignatura : Asignatura[]
}
