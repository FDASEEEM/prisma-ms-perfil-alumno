import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import pdfParse from 'pdf-parse';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  async findAll() {
    return this.prisma.student.findMany({
      include: {
        paciProfiles: true,
      },
    });
  }

  async findOne(id: string) {
    const student = await this.prisma.student.findUnique({
      where: { student_id: id },
      include: {
        paciProfiles: true,
      },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async findByUserId(userId: string) {
    const student = await this.prisma.student.findUnique({
      where: { user_id: userId },
      include: {
        paciProfiles: true,
      },
    });

    if (!student) {
      throw new NotFoundException(`Student with user_id ${userId} not found`);
    }

    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.prisma.student.update({
      where: { student_id: id },
      data: updateStudentDto,
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async remove(id: string) {
    const student = await this.prisma.student.delete({
      where: { student_id: id },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async importFromPdf(file: Buffer) {
    try {
      const data = await (pdfParse as any)(file);
      const text = data.text;

      // Parse PDF text to extract student data
      // This is a basic implementation - adjust parsing logic based on PDF format
      const lines = text.split('\n').filter(line => line.trim());
      
      // Example parsing - adjust according to your PDF format
      const students: CreateStudentDto[] = [];
      for (const line of lines) {
        if (line.includes('RUT:') || line.includes('rut:')) {
          // Extract student data from line
          // This is a placeholder - implement actual parsing logic
          const studentData = this.parseStudentLine(line);
          if (studentData) {
            students.push(studentData);
          }
        }
      }

      // Bulk create students
      const createdStudents = await this.prisma.student.createMany({
        data: students,
        skipDuplicates: true,
      });

      return {
        message: 'Import completed successfully',
        count: createdStudents.count,
      };
    } catch (error) {
      throw new Error(`Failed to parse PDF: ${error.message}`);
    }
  }

  private parseStudentLine(line: string): CreateStudentDto | null {
    // Implement actual parsing logic based on PDF format
    // This is a placeholder - adjust according to your PDF structure
    const parts = line.split(/[,;|]/).map(p => p.trim());
    
    if (parts.length >= 3) {
      return {
        user_id: parts[0] || '',
        rut: parts[1] || '',
        nombre: parts[2] || '',
        apellido: parts[3] || '',
        curso: parts[4] || '',
        establecimiento: parts[5] || '',
      };
    }
    
    return null;
  }
}
