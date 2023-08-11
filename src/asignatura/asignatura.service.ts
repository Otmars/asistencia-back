import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { Repository } from 'typeorm';
import { async } from 'rxjs';

import { competenciaAsignatura } from './dto/competencia-asignatura.dto';


@Injectable()
export class AsignaturaService {
  constructor(
    @InjectRepository(Asignatura)
    private asignaturaService: Repository<Asignatura>,
  ) {}

  async create(createAsignaturaDto: CreateAsignaturaDto) {
    const newAsignatura = await this.asignaturaService.create(
      createAsignaturaDto,
    );
    await this.asignaturaService.save(newAsignatura);
    return newAsignatura;
  }





  async findAll() {
    const consulta = await this.asignaturaService
      .createQueryBuilder('asignatura')
      .select(['asignatura', 'd.id', 'u.id', 'u.nombres' ,'h']) // consulta chida
      .leftJoin('asignatura.docente', 'd')
      .leftJoin('d.iduser', 'u')
      .leftJoin('asignatura.hospital', 'h')
      .getMany();
    return consulta;
  }

  async findOne(id: number) {
    const asignaturaFound = await this.asignaturaService.findOne({where:{id}})
    if(!asignaturaFound){
      throw new HttpException('Asignatura no existe',HttpStatus.NOT_FOUND)
    }
    const consulta = await this.asignaturaService
      .createQueryBuilder('asignatura')
      .select(['asignatura', 'd.id', 'u.id', 'u.nombres','h'])
      // .select(['asignatura.nombre', 'asignatura.id', 'd.id', 'u.id','u.nombres'])
      .where('asignatura.id = :id', { id }) // consulta chida
      .leftJoin('asignatura.docente', 'd')
      .leftJoin('d.iduser', 'u')
      .leftJoin('asignatura.hospital', 'h')
      .getMany();
    return consulta;
  }

  async update(id: number, updateAsignaturaDto: UpdateAsignaturaDto) {
    const asignaturaFound = await this.asignaturaService.findOne({
      where: { id },
    });
    if (!asignaturaFound) {
      return new HttpException('Asignatura no existe', HttpStatus.NOT_FOUND);
    }
    const updateAsignatura = Object.assign(
      asignaturaFound,
      updateAsignaturaDto,
    );
    return this.asignaturaService.save(updateAsignatura);
  }

  async remove(id: number) {
    return await this.asignaturaService.softRemove({ id });
  }


  async findAsignaturaDocenteOne(id: string) {
    const consulta = await this.asignaturaService
      .createQueryBuilder('asignatura')
      .select(['asignatura','h'])
      .where('u.id = :id', { id }) // consulta chida
      .leftJoin('asignatura.docente', 'd')
      .leftJoin('asignatura.hospital', 'h')
      .leftJoin('d.iduser', 'u')
      .getMany();

    return consulta;
  }

}
