import { Competencia } from 'src/competencia/entities/competencia.entity';
import { Docente } from 'src/docente/entities/docente.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AsignaturaToCompetencia } from './asignaturaCompetencia.entity';
import { Calificacion } from 'src/calificacion/entities/calificacion.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';
import { Asistencia } from 'src/asistencia/entities/asistencia.entity';

@Entity({ name: 'asignatura' })
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  siglaCodigo: string;

  @Column()
  cargaHoraria: number;

  // @Column()
  // RegNivelEst: string;

  @Column()
  nMeses: number;

  // @Column({default:"ninguno"})
  // prerequisito: string;

  @Column()
  paralelo: string;

  @Column('time', { name: 'hora_entrada', nullable: false })
  hora_entrada: Date;

  @Column('time', { name: 'hora_salida', nullable: false })
  hora_salida: Date;

  

  @DeleteDateColumn()
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => AsignaturaToCompetencia,
    (asignaturaCompetencia) => asignaturaCompetencia.asignatura,
  )
  asignaturaCompetencia: AsignaturaToCompetencia[];

  @OneToMany(() => Calificacion, (calificacion) => calificacion.asignatura)
  calificaion: Calificacion[];

  @OneToMany(() => Asistencia, (asistencia) => asistencia.asignatura)
  asistencia: Asistencia[];

  @ManyToOne(() => Docente, (docente) => docente.asignatura)
  docente: Docente;

  @ManyToOne(() => Hospital, (hospital) => hospital.asignatura)
  hospital: Hospital;
  // @JoinColumn({name:'hospital_id'})
  
}
