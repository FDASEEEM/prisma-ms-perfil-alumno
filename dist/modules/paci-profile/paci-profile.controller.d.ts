import { PaciProfileService } from './paci-profile.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
export declare class PaciProfileController {
    private readonly paciProfileService;
    constructor(paciProfileService: PaciProfileService);
    create(createPaciProfileDto: CreatePaciProfileDto): Promise<{
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    }>;
    findAll(): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findFiltered(studentId?: string, isActive?: string, curso?: string, fromDate?: string, toDate?: string): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findActive(): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findHistorical(): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findRecent(limit?: string): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findOne(id: string): Promise<{
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    }>;
    findByStudentId(studentId: string): Promise<({
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    update(id: string, updatePaciProfileDto: UpdatePaciProfileDto): Promise<{
        student: {
            userId: string;
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: string): Promise<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        diagnostico: string;
        fechaElaboracion: Date;
        fechaRevision: Date;
        duracion: string;
        validFrom: Date;
        validUntil: Date;
        datosEstructurales: import("@prisma/client/runtime/library").JsonValue;
    }>;
}
