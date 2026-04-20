"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/services/prisma.service");
const pdf_parse_1 = __importDefault(require("pdf-parse"));
let StudentService = class StudentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createStudentDto) {
        return this.prisma.student.create({
            data: createStudentDto,
        });
    }
    async findAll() {
        return this.prisma.student.findMany({
            include: {
                paciProfiles: true,
            },
        });
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({
            where: { student_id: id },
            include: {
                paciProfiles: true,
            },
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
    async findByUserId(userId) {
        const student = await this.prisma.student.findUnique({
            where: { user_id: userId },
            include: {
                paciProfiles: true,
            },
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with user_id ${userId} not found`);
        }
        return student;
    }
    async update(id, updateStudentDto) {
        const student = await this.prisma.student.update({
            where: { student_id: id },
            data: updateStudentDto,
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
    async remove(id) {
        const student = await this.prisma.student.delete({
            where: { student_id: id },
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
    async importFromPdf(file) {
        try {
            const data = await pdf_parse_1.default(file);
            const text = data.text;
            const lines = text.split('\n').filter(line => line.trim());
            const students = [];
            for (const line of lines) {
                if (line.includes('RUT:') || line.includes('rut:')) {
                    const studentData = this.parseStudentLine(line);
                    if (studentData) {
                        students.push(studentData);
                    }
                }
            }
            const createdStudents = await this.prisma.student.createMany({
                data: students,
                skipDuplicates: true,
            });
            return {
                message: 'Import completed successfully',
                count: createdStudents.count,
            };
        }
        catch (error) {
            throw new Error(`Failed to parse PDF: ${error.message}`);
        }
    }
    parseStudentLine(line) {
        const parts = line.split(/[,;|]/).map(p => p.trim());
        if (parts.length >= 3) {
            return {
                user_id: parts[0] || '',
                rut: parts[1] || '',
                nombre: parts[2] || '',
                apellido: parts[3] || '',
                curso: parts[4] || '',
                establecimiento: parts[5] || '',
            };
        }
        return null;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentService);
//# sourceMappingURL=student.service.js.map