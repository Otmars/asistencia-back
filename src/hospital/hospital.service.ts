import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospital } from './entities/hospital.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private hospitalRepository: Repository<Hospital>,
  ) {}

  async create(createHospitalDto: CreateHospitalDto) {
    const newHospital = await this.hospitalRepository.create(createHospitalDto)
   console.log(newHospital);
   
    return this.hospitalRepository.save(newHospital)
  }

  findAll() {
    return this.hospitalRepository.find();
  }

  findOne(id: number) {
    return this.hospitalRepository.findBy({id});
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return this.hospitalRepository.softDelete({id});
  }
}
