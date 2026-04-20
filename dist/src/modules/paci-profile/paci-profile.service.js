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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaciProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/services/prisma.service");
let PaciProfileService = class PaciProfileService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPaciProfileDto) {
        const student = await this.prisma.student.findUnique({
            where: { student_id: createPaciProfileDto.student_id },
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${createPaciProfileDto.student_id} not found`);
        }
        return this.prisma.paciProfile.create({
            data: createPaciProfileDto,
            include: {
                student: true,
            },
        });
    }
    async findAll() {
        return this.prisma.paciProfile.findMany({
            include: {
                student: true,
            },
        });
    }
    async findOne(id) {
        const paciProfile = await this.prisma.paciProfile.findUnique({
            where: { paci_id: id },
            include: {
                student: true,
            },
        });
        if (!paciProfile) {
            throw new common_1.NotFoundException(`PACI Profile with ID ${id} not found`);
        }
        return paciProfile;
    }
    async findByStudentId(studentId) {
        return this.prisma.paciProfile.findMany({
            where: { student_id: studentId },
            include: {
                student: true,
            },
        });
    }
    async update(id, updatePaciProfileDto) {
        const paciProfile = await this.prisma.paciProfile.update({
            where: { paci_id: id },
            data: updatePaciProfileDto,
            include: {
                student: true,
            },
        });
        if (!paciProfile) {
            throw new common_1.NotFoundException(`PACI Profile with ID ${id} not found`);
        }
        return paciProfile;
    }
    async remove(id) {
        const paciProfile = await this.prisma.paciProfile.delete({
            where: { paci_id: id },
        });
        if (!paciProfile) {
            throw new common_1.NotFoundException(`PACI Profile with ID ${id} not found`);
        }
        return paciProfile;
    }
};
exports.PaciProfileService = PaciProfileService;
exports.PaciProfileService = PaciProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaciProfileService);
//# sourceMappingURL=paci-profile.service.js.map