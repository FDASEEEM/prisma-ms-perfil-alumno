import { NotFoundException } from '@nestjs/common';
import pdfParse from 'pdf-parse';
import { StudentService } from './student.service';
import { PrismaService } from '../../common/services/prisma.service';

jest.mock('pdf-parse', () => jest.fn());

describe('StudentService', () => {
  let service: StudentService;
  let prisma: PrismaService;

  const prismaMock = {
    student: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      createMany: jest.fn(),
    },
  } as unknown as PrismaService;

  beforeEach(() => {
    prisma = prismaMock;
    service = new StudentService(prisma);
    jest.clearAllMocks();
  });

  it('creates a student with normalized date', async () => {
    prismaMock.student.create.mockResolvedValue({ id: '1' });

    await service.create({
      userId: 'user-1',
      nombreCompleto: 'Ana Ruiz',
      fechaNacimiento: '2024-01-01',
      cursoActual: '4A',
    });

    const call = prismaMock.student.create.mock.calls[0][0];
    expect(call.data.fechaNacimiento).toBeInstanceOf(Date);
  });

  it('finds all students with profiles', async () => {
    prismaMock.student.findMany.mockResolvedValue([]);

    await service.findAll();

    expect(prismaMock.student.findMany).toHaveBeenCalledWith({
      include: { paciProfiles: true },
    });
  });

  it('throws when student not found by id', async () => {
    prismaMock.student.findUnique.mockResolvedValue(null);

    await expect(service.findOne('missing')).rejects.toThrow(NotFoundException);
  });

  it('returns student when found by id', async () => {
    prismaMock.student.findUnique.mockResolvedValue({ id: '1' });

    const result = await service.findOne('1');

    expect(prismaMock.student.findUnique).toHaveBeenCalledWith({
      where: { id: '1' },
      include: { paciProfiles: true },
    });
    expect(result).toEqual({ id: '1' });
  });

  it('throws when student not found by userId', async () => {
    prismaMock.student.findFirst.mockResolvedValue(null);

    await expect(service.findByUserId('missing')).rejects.toThrow(NotFoundException);
  });

  it('returns student when found by userId', async () => {
    prismaMock.student.findFirst.mockResolvedValue({ id: '1' });

    const result = await service.findByUserId('u1');

    expect(prismaMock.student.findFirst).toHaveBeenCalledWith({
      where: { userId: 'u1' },
      include: { paciProfiles: true },
    });
    expect(result).toEqual({ id: '1' });
  });

  it('updates a student and preserves invalid date string', async () => {
    prismaMock.student.update.mockResolvedValue({ id: '1' });

    await service.update('1', { fechaNacimiento: 'not-a-date' });

    const call = prismaMock.student.update.mock.calls[0][0];
    expect(call.data.fechaNacimiento).toBe('not-a-date');
  });

  it('updates a student without fechaNacimiento', async () => {
    prismaMock.student.update.mockResolvedValue({ id: '2' });

    await service.update('2', { cursoActual: '5B' });

    const call = prismaMock.student.update.mock.calls[0][0];
    expect(call.data).toEqual({ cursoActual: '5B' });
  });

  it('throws when update returns null', async () => {
    prismaMock.student.update.mockResolvedValue(null);

    await expect(service.update('1', {})).rejects.toThrow(NotFoundException);
  });

  it('throws when delete returns null', async () => {
    prismaMock.student.delete.mockResolvedValue(null);

    await expect(service.remove('1')).rejects.toThrow(NotFoundException);
  });

  it('removes a student when delete succeeds', async () => {
    prismaMock.student.delete.mockResolvedValue({ id: '1' });

    const result = await service.remove('1');

    expect(prismaMock.student.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toEqual({ id: '1' });
  });

  it('imports students from pdf', async () => {
    (pdfParse as jest.Mock).mockResolvedValue({
      text: 'RUT:123,John Doe,2000-01-01,4A\n',
    });
    prismaMock.student.createMany.mockResolvedValue({ count: 1 });

    const result = await service.importFromPdf(Buffer.from('data'));

    expect(prismaMock.student.createMany).toHaveBeenCalledWith({
      data: [
        {
          userId: 'RUT:123',
          nombreCompleto: 'John Doe',
          fechaNacimiento: '2000-01-01',
          cursoActual: '4A',
        },
      ],
      skipDuplicates: true,
    });
    expect(result).toEqual({
      message: 'Import completed successfully',
      count: 1,
    });
  });

  it('skips lines that do not parse into a student', async () => {
    (pdfParse as jest.Mock).mockResolvedValue({
      text: 'RUT:ONLY\n',
    });
    prismaMock.student.createMany.mockResolvedValue({ count: 0 });

    const result = await service.importFromPdf(Buffer.from('data'));

    expect(prismaMock.student.createMany).toHaveBeenCalledWith({
      data: [],
      skipDuplicates: true,
    });
    expect(result).toEqual({
      message: 'Import completed successfully',
      count: 0,
    });
  });

  it('wraps pdf errors with a readable message', async () => {
    (pdfParse as jest.Mock).mockRejectedValue(new Error('bad pdf'));

    await expect(service.importFromPdf(Buffer.from('data'))).rejects.toThrow(
      'Failed to parse PDF: bad pdf',
    );
  });
});
