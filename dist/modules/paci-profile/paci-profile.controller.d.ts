import { PaciProfileService } from './paci-profile.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
export declare class PaciProfileController {
    private readonly paciProfileService;
    constructor(paciProfileService: PaciProfileService);
    create(createPaciProfileDto: CreatePaciProfileDto): Promise<{
        student: {
            createdAt: Date;
            updatedAt: Date;
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
        };
    } & {
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    }>;
    findAll(): Promise<({
        student: {
            createdAt: Date;
            updatedAt: Date;
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
        };
    } & {
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    })[]>;
    findOne(id: string): Promise<{
        student: {
            createdAt: Date;
            updatedAt: Date;
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
        };
    } & {
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    }>;
    findByStudentId(studentId: string): Promise<({
        student: {
            createdAt: Date;
            updatedAt: Date;
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
        };
    } & {
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    })[]>;
    update(id: string, updatePaciProfileDto: UpdatePaciProfileDto): Promise<{
        student: {
            createdAt: Date;
            updatedAt: Date;
            student_id: string;
            user_id: string;
            rut: string;
            nombre: string;
            apellido: string;
            curso: string;
            establecimiento: string;
        };
    } & {
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    }>;
    remove(id: string): Promise<{
        paci_id: string;
        fecha_diagnostico: Date;
        nee: string;
        descripcion_incapacidad: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        student_id: string;
    }>;
}
