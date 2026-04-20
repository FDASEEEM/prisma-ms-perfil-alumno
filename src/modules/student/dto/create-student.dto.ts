import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  curso: string;

  @IsString()
  @IsNotEmpty()
  establecimiento: string;
}
