import { ApiProperty } from "@nestjs/swagger";
import { Asignatura } from "src/asignatura/entities/asignatura.entity";

export class CreateAsistenciaDto {

    id: number;
  
    @ApiProperty()
    fecha_hora_registro: Date;
  
    @ApiProperty({
        example:"-16.592069533511765, -68.19434310687697"
    })
    ubicacion_registro: string;

    @ApiProperty({example:"anatomia1", description:"crear antes la materia o asignatura"})
    asignatura : Asignatura

}
