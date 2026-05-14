import { PaciProfileController } from './paci-profile.controller';
import { PaciProfileService } from './paci-profile.service';

const serviceMock = {
  create: jest.fn(),
  findAll: jest.fn(),
  findFiltered: jest.fn(),
  findActive: jest.fn(),
  findHistorical: jest.fn(),
  findRecent: jest.fn(),
  findOne: jest.fn(),
  findByStudentId: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
} as unknown as PaciProfileService;

describe('PaciProfileController', () => {
  let controller: PaciProfileController;

  beforeEach(() => {
    controller = new PaciProfileController(serviceMock);
    jest.clearAllMocks();
  });

  it('delegates create', async () => {
    serviceMock.create.mockResolvedValue({ id: 'p1' });

    const result = await controller.create({
      studentId: 's1',
      userId: 'u1',
      diagnostico: 'DX',
      fechaElaboracion: '2024-01-01',
      fechaRevision: '2024-02-01',
      duracion: '1',
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      datosEstructurales: { a: 1 },
    });

    expect(serviceMock.create).toHaveBeenCalled();
    expect(result).toEqual({ id: 'p1' });
  });

  it('delegates findAll', async () => {
    serviceMock.findAll.mockResolvedValue([]);

    const result = await controller.findAll();

    expect(serviceMock.findAll).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('delegates findFiltered', async () => {
    serviceMock.findFiltered.mockResolvedValue([]);

    const result = await controller.findFiltered('s1', 'true', '2B', '2024-01-01', '2024-12-31');

    expect(serviceMock.findFiltered).toHaveBeenCalledWith({
      studentId: 's1',
      isActive: 'true',
      curso: '2B',
      fromDate: '2024-01-01',
      toDate: '2024-12-31',
    });
    expect(result).toEqual([]);
  });

  it('delegates findActive', async () => {
    serviceMock.findActive.mockResolvedValue([]);

    const result = await controller.findActive();

    expect(serviceMock.findActive).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('delegates findHistorical', async () => {
    serviceMock.findHistorical.mockResolvedValue([]);

    const result = await controller.findHistorical();

    expect(serviceMock.findHistorical).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('delegates findRecent', async () => {
    serviceMock.findRecent.mockResolvedValue([]);

    const result = await controller.findRecent('5');

    expect(serviceMock.findRecent).toHaveBeenCalledWith('5');
    expect(result).toEqual([]);
  });

  it('delegates findOne', async () => {
    serviceMock.findOne.mockResolvedValue({ id: 'p1' });

    const result = await controller.findOne('p1');

    expect(serviceMock.findOne).toHaveBeenCalledWith('p1');
    expect(result).toEqual({ id: 'p1' });
  });

  it('delegates findByStudentId', async () => {
    serviceMock.findByStudentId.mockResolvedValue([]);

    const result = await controller.findByStudentId('s1');

    expect(serviceMock.findByStudentId).toHaveBeenCalledWith('s1');
    expect(result).toEqual([]);
  });

  it('delegates update', async () => {
    serviceMock.update.mockResolvedValue({ id: 'p1' });

    const result = await controller.update('p1', { diagnostico: 'DX2' });

    expect(serviceMock.update).toHaveBeenCalledWith('p1', { diagnostico: 'DX2' });
    expect(result).toEqual({ id: 'p1' });
  });

  it('delegates remove', async () => {
    serviceMock.remove.mockResolvedValue({ id: 'p1' });

    const result = await controller.remove('p1');

    expect(serviceMock.remove).toHaveBeenCalledWith('p1');
    expect(result).toEqual({ id: 'p1' });
  });
});
