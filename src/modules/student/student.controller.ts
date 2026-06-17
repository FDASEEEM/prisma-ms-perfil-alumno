import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SupabaseJwtGuard } from '../../common/guards/supabase-jwt.guard';

type RequestWithUser = Request & { user?: { id?: string; colegioId?: string | null } };

@Controller('students')
@UseGuards(SupabaseJwtGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Req() request: RequestWithUser, @Body() createStudentDto: CreateStudentDto) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.create(userId, colegioId, createStudentDto);
  }

  @Get()
  findAll(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.findAll(userId, colegioId);
  }

  @Get('me')
  findMe(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.findByUserId(userId);
  }

  @Get(':id')
  findOne(@Req() request: RequestWithUser, @Param('id') id: string) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.findOne(userId, id, colegioId);
  }

  @Patch(':id')
  update(@Req() request: RequestWithUser, @Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.update(userId, id, colegioId, updateStudentDto);
  }

  @Delete(':id')
  remove(@Req() request: RequestWithUser, @Param('id') id: string) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.remove(userId, id, colegioId);
  }

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  importFromPdf(@Req() request: RequestWithUser, @UploadedFile() file: Express.Multer.File) {
    const userId = request.user?.id;
    const colegioId = request.user?.colegioId || null;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.studentService.importFromPdf(userId, colegioId, file.buffer);
  }
}
