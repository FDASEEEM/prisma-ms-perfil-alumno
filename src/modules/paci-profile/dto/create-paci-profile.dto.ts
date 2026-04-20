import { IsString, IsNotEmpty, IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreatePaciProfileDto {
  @IsUUID()
  @IsNotEmpty()
  student_id: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_diagnostico: string;

  @IsString()
  @IsNotEmpty()
  nee: string;

  @IsString()
  @IsNotEmpty()
  descripcion_incapacidad: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
