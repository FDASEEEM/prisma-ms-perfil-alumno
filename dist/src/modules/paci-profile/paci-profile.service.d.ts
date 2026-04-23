import { PrismaService } from '../../common/services/prisma.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
export declare class PaciProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPaciProfileDto: CreatePaciProfileDto): Promise<{
        student: {
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    }>;
    findAll(): Promise<({
        student: {
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    })[]>;
    findOne(id: string): Promise<{
        student: {
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    }>;
    findByStudentId(studentId: string): Promise<({
        student: {
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    })[]>;
    update(id: string, updatePaciProfileDto: UpdatePaciProfileDto): Promise<{
        student: {
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    }>;
    remove(id: string): Promise<{
        student_id: string;
        createdAt: Date;
        updatedAt: Date;
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
    }>;
}
