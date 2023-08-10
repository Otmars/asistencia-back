import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { DocenteModule } from './docente/docente.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Docente } from './docente/entities/docente.entity';
import { Asignatura } from './asignatura/entities/asignatura.entity';
import { Roles } from './user/entities/roles.entity';
import { HospitalModule } from './hospital/hospital.module';
import { Hospital } from './hospital/entities/hospital.entity';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { Asistencia } from './asistencia/entities/asistencia.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Docente, Asignatura, Roles, Hospital, Asistencia],
      extra:{ssl:process.env.DATABASE_SSL == 'true'},
      synchronize: true,
    }),
    UserModule,
    AsignaturaModule,
    DocenteModule,
    HospitalModule,
    AsistenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
