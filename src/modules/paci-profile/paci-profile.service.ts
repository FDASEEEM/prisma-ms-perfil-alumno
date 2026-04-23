import { Injectable, NotFoundException } from '@nestjs/common';
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

    return this.prisma.paciProfile.create({
      data: createPaciProfileDto,
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
    const paciProfile = await this.prisma.paciProfile.update({
      where: { id: id },
      data: updatePaciProfileDto,
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
}
