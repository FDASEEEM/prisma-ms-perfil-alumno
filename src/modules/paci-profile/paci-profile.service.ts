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

  async findFiltered(filters: {
    studentId?: string;
    isActive?: string;
    curso?: string;
    fromDate?: string;
    toDate?: string;
  }) {
    const where: Prisma.PaciProfileWhereInput = {};

    if (filters.studentId) {
      where.studentId = filters.studentId;
    }

    if (filters.curso) {
      where.student = { is: { cursoActual: filters.curso } };
    }

    if (filters.fromDate || filters.toDate) {
      where.fechaElaboracion = {};
      if (filters.fromDate) {
        where.fechaElaboracion.gte = new Date(filters.fromDate);
      }
      if (filters.toDate) {
        where.fechaElaboracion.lte = new Date(filters.toDate);
      }
    }

    if (filters.isActive !== undefined) {
      const isActive = filters.isActive === 'true' || filters.isActive === '1';
      const now = new Date();
      const activeCondition: Prisma.PaciProfileWhereInput = {
        AND: [{ validFrom: { lte: now } }, { validUntil: { gte: now } }],
      };

      Object.assign(
        where,
        isActive ? activeCondition : { NOT: activeCondition },
      );
    }

    return this.prisma.paciProfile.findMany({
      where,
      include: { student: true },
    });
  }

  async findActive() {
    const now = new Date();
    return this.prisma.paciProfile.findMany({
      where: {
        validFrom: { lte: now },
        validUntil: { gte: now },
      },
      include: { student: true },
    });
  }

  async findHistorical() {
    const now = new Date();
    return this.prisma.paciProfile.findMany({
      where: {
        validUntil: { lt: now },
      },
      include: { student: true },
    });
  }

  async findRecent(limit?: string) {
    const take = Math.max(1, Number.parseInt(limit || '10', 10) || 10);
    return this.prisma.paciProfile.findMany({
      orderBy: { createdAt: 'desc' },
      take,
      include: { student: true },
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
