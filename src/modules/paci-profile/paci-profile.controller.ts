import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaciProfileService } from './paci-profile.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
import { SupabaseJwtGuard } from '../../common/guards/supabase-jwt.guard';

@Controller('paci-profiles')
// @UseGuards(SupabaseJwtGuard) // Desactivado temporalmente para pruebas locales
export class PaciProfileController {
  constructor(private readonly paciProfileService: PaciProfileService) {}

  @Post()
  create(@Body() createPaciProfileDto: CreatePaciProfileDto) {
    return this.paciProfileService.create(createPaciProfileDto);
  }

  @Get()
  findAll() {
    return this.paciProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paciProfileService.findOne(id);
  }

  @Get('student/:studentId')
  findByStudentId(@Param('studentId') studentId: string) {
    return this.paciProfileService.findByStudentId(studentId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaciProfileDto: UpdatePaciProfileDto) {
    return this.paciProfileService.update(id, updatePaciProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paciProfileService.remove(id);
  }
}
