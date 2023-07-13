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


export enum Estados {
  ENTRADA = "Entrada",
  SALIDA = "Salida"
}

@Entity()
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false ,type: "enum", enum:Estados})
  estado: Estados;

  @Column({ nullable: false })
  fecha_hora_registro: Date;

  @Column({ nullable: false })
  ubicacion_registro: string;



  @DeleteDateColumn()
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Asignatura, (asignatura) => asignatura.asistencia, {
    nullable: false,
  })
  asignatura: Asignatura;
}
