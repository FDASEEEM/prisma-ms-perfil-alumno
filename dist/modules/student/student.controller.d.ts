import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<{
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        paciProfiles: {
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
        }[];
    } & {
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        paciProfiles: {
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
        }[];
    } & {
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByUserId(userId: string): Promise<{
        paciProfiles: {
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
        }[];
    } & {
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        userId: string;
        nombreCompleto: string;
        fechaNacimiento: Date;
        cursoActual: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    importFromPdf(file: Express.Multer.File): Promise<{
        message: string;
        count: number;
    }>;
}
