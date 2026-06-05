import { Request } from 'express';
import { PaciProfileService } from './paci-profile.service';
import { CreatePaciProfileDto } from './dto/create-paci-profile.dto';
import { UpdatePaciProfileDto } from './dto/update-paci-profile.dto';
type RequestWithUser = Request & {
    user?: {
        id?: string;
    };
};
export declare class PaciProfileController {
    private readonly paciProfileService;
    constructor(paciProfileService: PaciProfileService);
    create(request: RequestWithUser, createPaciProfileDto: CreatePaciProfileDto): Promise<{
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findAll(request: RequestWithUser): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findFiltered(request: RequestWithUser, studentId?: string, isActive?: string, curso?: string, fromDate?: string, toDate?: string): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findActive(request: RequestWithUser): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findHistorical(request: RequestWithUser): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findRecent(request: RequestWithUser, limit?: string): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findOne(request: RequestWithUser, id: string): Promise<{
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    findByStudentId(request: RequestWithUser, studentId: string): Promise<({
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    update(request: RequestWithUser, id: string, updatePaciProfileDto: UpdatePaciProfileDto): Promise<{
        student: {
            nombreCompleto: string;
            fechaNacimiento: Date;
            cursoActual: string;
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
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
    remove(request: RequestWithUser, id: string): Promise<{
        id: string;
        userId: string;
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
export {};
