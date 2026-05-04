import { IsString, IsNotEmpty, IsUUID, IsDateString } from 'class-validator';

export class CreateStudentDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  nombreCompleto: string;

  @IsDateString()
  @IsNotEmpty()
  fechaNacimiento: string;

  @IsString()
  @IsNotEmpty()
  cursoActual: string;
}
