import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<{
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        paciProfiles: {
            student_id: string;
            createdAt: Date;
            updatedAt: Date;
            paci_id: string;
            fecha_diagnostico: Date;
            nee: string;
            descripcion_incapacidad: string;
            observaciones: string | null;
        }[];
    } & {
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        paciProfiles: {
            student_id: string;
            createdAt: Date;
            updatedAt: Date;
            paci_id: string;
            fecha_diagnostico: Date;
            nee: string;
            descripcion_incapacidad: string;
            observaciones: string | null;
        }[];
    } & {
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByUserId(userId: string): Promise<{
        paciProfiles: {
            student_id: string;
            createdAt: Date;
            updatedAt: Date;
            paci_id: string;
            fecha_diagnostico: Date;
            nee: string;
            descripcion_incapacidad: string;
            observaciones: string | null;
        }[];
    } & {
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        student_id: string;
        user_id: string;
        rut: string;
        nombre: string;
        apellido: string;
        curso: string;
        establecimiento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    importFromPdf(file: Express.Multer.File): Promise<{
        message: string;
        count: number;
    }>;
}
