import { StudentController } from './student.controller';
import { StudentService } from './student.service';

const serviceMock = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  findByUserId: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
  importFromPdf: jest.fn(),
} as unknown as StudentService;

describe('StudentController', () => {
  let controller: StudentController;

  beforeEach(() => {
    controller = new StudentController(serviceMock);
    jest.clearAllMocks();
  });

  it('delegates create', async () => {
    serviceMock.create.mockResolvedValue({ id: '1' });

    const result = await controller.create({
      userId: 'u1',
      nombreCompleto: 'Ana Ruiz',
      fechaNacimiento: '2024-01-01',
      cursoActual: '4A',
    });

    expect(serviceMock.create).toHaveBeenCalled();
    expect(result).toEqual({ id: '1' });
  });

  it('delegates findAll', async () => {
    serviceMock.findAll.mockResolvedValue([]);

    const result = await controller.findAll();

    expect(serviceMock.findAll).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('delegates findOne', async () => {
    serviceMock.findOne.mockResolvedValue({ id: '1' });

    const result = await controller.findOne('1');

    expect(serviceMock.findOne).toHaveBeenCalledWith('1');
    expect(result).toEqual({ id: '1' });
  });

  it('delegates findByUserId', async () => {
    serviceMock.findByUserId.mockResolvedValue({ id: '1' });

    const result = await controller.findByUserId('u1');

    expect(serviceMock.findByUserId).toHaveBeenCalledWith('u1');
    expect(result).toEqual({ id: '1' });
  });

  it('delegates update', async () => {
    serviceMock.update.mockResolvedValue({ id: '1' });

    const result = await controller.update('1', { cursoActual: '3B' });

    expect(serviceMock.update).toHaveBeenCalledWith('1', { cursoActual: '3B' });
    expect(result).toEqual({ id: '1' });
  });

  it('delegates remove', async () => {
    serviceMock.remove.mockResolvedValue({ id: '1' });

    const result = await controller.remove('1');

    expect(serviceMock.remove).toHaveBeenCalledWith('1');
    expect(result).toEqual({ id: '1' });
  });

  it('delegates importFromPdf', async () => {
    serviceMock.importFromPdf.mockResolvedValue({ count: 1 });

    const result = await controller.importFromPdf({
      buffer: Buffer.from('data'),
    } as Express.Multer.File);

    expect(serviceMock.importFromPdf).toHaveBeenCalledWith(Buffer.from('data'));
    expect(result).toEqual({ count: 1 });
  });
});
