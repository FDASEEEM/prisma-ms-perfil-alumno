import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { PaciProfileService } from './paci-profile.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
import { SupabaseJwtGuard } from '../../common/guards/supabase-jwt.guard';

type RequestWithUser = Request & { user?: { id?: string } };

@Controller('paci-profiles')
@UseGuards(SupabaseJwtGuard)
export class PaciProfileController {
  constructor(private readonly paciProfileService: PaciProfileService) {}

  @Post()
  create(@Req() request: RequestWithUser, @Body() createPaciProfileDto: CreatePaciProfileDto) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.create(userId, createPaciProfileDto);
  }

  @Get()
  findAll(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findAll(userId);
  }

  @Get('filter')
  findFiltered(
    @Req() request: RequestWithUser,
    @Query('studentId') studentId?: string,
    @Query('isActive') isActive?: string,
    @Query('curso') curso?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findFiltered(userId, {
      studentId,
      isActive,
      curso,
      fromDate,
      toDate,
    });
  }

  @Get('active')
  findActive(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findActive(userId);
  }

  @Get('historical')
  findHistorical(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findHistorical(userId);
  }

  @Get('recent')
  findRecent(@Req() request: RequestWithUser, @Query('limit') limit?: string) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findRecent(userId, limit);
  }

  @Get(':id')
  findOne(@Req() request: RequestWithUser, @Param('id') id: string) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findOne(userId, id);
  }

  @Get('student/:studentId')
  findByStudentId(@Req() request: RequestWithUser, @Param('studentId') studentId: string) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.findByStudentId(userId, studentId);
  }

  @Patch(':id')
  update(@Req() request: RequestWithUser, @Param('id') id: string, @Body() updatePaciProfileDto: UpdatePaciProfileDto) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.update(userId, id, updatePaciProfileDto);
  }

  @Delete(':id')
  remove(@Req() request: RequestWithUser, @Param('id') id: string) {
    const userId = request.user?.id;
    if (!userId) {
      throw new BadRequestException('Authenticated user is required.');
    }
    return this.paciProfileService.remove(userId, id);
  }
}
