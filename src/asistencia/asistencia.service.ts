import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Repository } from 'typeorm';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepository: Repository<Asistencia>,
    @InjectRepository(Asignatura)
    private asignaturaRepository: Repository<Asignatura>,
    private readonly httpService: HttpService,
  ) {}

  async create(createasistenciaDto: CreateAsistenciaDto) {
    const asignaturaId =  await createasistenciaDto.asignatura.id;
    const findAsignatura = await this.asignaturaRepository.findOne({where:{id:asignaturaId}})

    if (!findAsignatura ) {
      return new HttpException(
        'Asignatura no existeeeeee',
        HttpStatus.NOT_FOUND,
      );
    }
    
    const respuesta = await firstValueFrom(
      this.httpService.get(
        'https://timeapi.io/api/Time/current/zone?timeZone=America/La_Paz',
      ),
    );
    const hora = respuesta.data.dateTime;
    console.log(hora);
    const newRegistro = await this.asistenciaRepository.create(createasistenciaDto);

    return await this.asistenciaRepository.save(newRegistro);
  }

  findAll() {
    return `This action returns all asistencia`;
  }

  async findOne(id: number) {}

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return `This action updates a #${id} asistencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistencia`;
  }
}
