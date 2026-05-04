import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/services/prisma.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';

@Injectable()
export class PaciProfileService {
  constructor(private prisma: PrismaService) {}

  async create(createPaciProfileDto: CreatePaciProfileDto) {
    // Verify student exists
    const student = await this.prisma.student.findUnique({
      where: { id: createPaciProfileDto.studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${createPaciProfileDto.studentId} not found`);
    }

    const normalized = this.normalizeCreatePaciDates(createPaciProfileDto);

    return this.prisma.paciProfile.create({
      data: normalized,
      include: {
        student: true,
      },
    });
  }

  async findAll() {
    return this.prisma.paciProfile.findMany({
      include: {
        student: true,
      },
    });
  }

  async findOne(id: string) {
    const paciProfile = await this.prisma.paciProfile.findUnique({
      where: { id: id },
      include: {
        student: true,
      },
    });

    if (!paciProfile) {
      throw new NotFoundException(`PACI Profile with ID ${id} not found`);
    }

    return paciProfile;
  }

  async findByStudentId(studentId: string) {
    return this.prisma.paciProfile.findMany({
      where: { studentId: studentId },
      include: {
        student: true,
      },
    });
  }

  async update(id: string, updatePaciProfileDto: UpdatePaciProfileDto) {
    const normalized = this.normalizeUpdatePaciDates(updatePaciProfileDto);

    const paciProfile = await this.prisma.paciProfile.update({
      where: { id: id },
      data: normalized,
      include: {
        student: true,
      },
    });

    if (!paciProfile) {
      throw new NotFoundException(`PACI Profile with ID ${id} not found`);
    }

    return paciProfile;
  }

  async remove(id: string) {
    const paciProfile = await this.prisma.paciProfile.delete({
      where: { id: id },
    });

    if (!paciProfile) {
      throw new NotFoundException(`PACI Profile with ID ${id} not found`);
    }

    return paciProfile;
  }

  private normalizeCreatePaciDates(dto: CreatePaciProfileDto): Prisma.PaciProfileUncheckedCreateInput {
    return {
      studentId: dto.studentId,
      userId: dto.userId,
      diagnostico: dto.diagnostico,
      fechaElaboracion: this.normalizeDate(dto.fechaElaboracion),
      fechaRevision: this.normalizeDate(dto.fechaRevision),
      duracion: dto.duracion,
      validFrom: this.normalizeDate(dto.validFrom),
      validUntil: this.normalizeDate(dto.validUntil),
      datosEstructurales: dto.datosEstructurales,
    };
  }

  private normalizeUpdatePaciDates(dto: UpdatePaciProfileDto): Prisma.PaciProfileUncheckedUpdateInput {
    return {
      ...(dto.studentId ? { studentId: dto.studentId } : {}),
      ...(dto.userId ? { userId: dto.userId } : {}),
      ...(dto.diagnostico ? { diagnostico: dto.diagnostico } : {}),
      ...(dto.fechaElaboracion ? { fechaElaboracion: this.normalizeDate(dto.fechaElaboracion) } : {}),
      ...(dto.fechaRevision ? { fechaRevision: this.normalizeDate(dto.fechaRevision) } : {}),
      ...(dto.duracion ? { duracion: dto.duracion } : {}),
      ...(dto.validFrom ? { validFrom: this.normalizeDate(dto.validFrom) } : {}),
      ...(dto.validUntil ? { validUntil: this.normalizeDate(dto.validUntil) } : {}),
      ...(dto.datosEstructurales ? { datosEstructurales: dto.datosEstructurales } : {}),
    };
  }

  private normalizeDate(value: string) {
    // Accepts YYYY-MM-DD or full ISO date-time strings.
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return date;
  }
}
