import { Request } from 'express';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
type RequestWithUser = Request & {
    user?: {
        id?: string;
    };
};
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(request: RequestWithUser, createStudentDto: CreateStudentDto): Promise<{
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(request: RequestWithUser): Promise<({
        paciProfiles: {
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
        }[];
    } & {
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findMe(request: RequestWithUser): Promise<{
        paciProfiles: {
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
        }[];
    } & {
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(request: RequestWithUser, id: string): Promise<{
        paciProfiles: {
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
        }[];
    } & {
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(request: RequestWithUser, id: string, updateStudentDto: UpdateStudentDto): Promise<{
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(request: RequestWithUser, id: string): Promise<{
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    importFromPdf(request: RequestWithUser, file: Express.Multer.File): Promise<{
        message: string;
        count: number;
    }>;
}
export {};
