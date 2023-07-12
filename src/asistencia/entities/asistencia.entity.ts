import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha_hora_registro: Date;

  @Column()
  ubicacion_registro: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Asignatura, (asignatura) => asignatura.asistencia)
  asignatura: Asignatura;
}
