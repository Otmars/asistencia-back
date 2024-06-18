import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEmpty,
  IsNumber,
  IsOptional,
  isNumber,
} from 'class-validator';
import { Roles } from '../entities/roles.entity';

export class CreateUserDto {
  username: string;

  password: string;

  @ApiProperty({ default: 1 })
  rol: Roles;

  @ApiProperty()
  nombres: string;

  @ApiProperty()
  apellidoPaterno: string;

  @ApiProperty()
  apellidoMaterno: string;

  @ApiProperty()
  @IsEmpty()
  email: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  ci: string;

  @ApiProperty()
  fnacimiento: string;

  @IsNumber()
  @IsOptional()
  ru: number;
}
