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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaciProfileController = void 0;
const common_1 = require("@nestjs/common");
const paci_profile_service_1 = require("./paci-profile.service");
const create_paci_profile_dto_1 = require("./dto/create-paci-profile.dto");
const update_paci_profile_dto_1 = require("./dto/update-paci-profile.dto");
const supabase_jwt_guard_1 = require("../../common/guards/supabase-jwt.guard");
let PaciProfileController = class PaciProfileController {
    paciProfileService;
    constructor(paciProfileService) {
        this.paciProfileService = paciProfileService;
    }
    create(request, createPaciProfileDto) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.create(userId, createPaciProfileDto);
    }
    findAll(request) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findAll(userId);
    }
    findFiltered(request, studentId, isActive, curso, fromDate, toDate) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findFiltered(userId, {
            studentId,
            isActive,
            curso,
            fromDate,
            toDate,
        });
    }
    findActive(request) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findActive(userId);
    }
    findHistorical(request) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findHistorical(userId);
    }
    findRecent(request, limit) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findRecent(userId, limit);
    }
    findOne(request, id) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findOne(userId, id);
    }
    findByStudentId(request, studentId) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.findByStudentId(userId, studentId);
    }
    update(request, id, updatePaciProfileDto) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.update(userId, id, updatePaciProfileDto);
    }
    remove(request, id) {
        const userId = request.user?.id;
        if (!userId) {
            throw new common_1.BadRequestException('Authenticated user is required.');
        }
        return this.paciProfileService.remove(userId, id);
    }
};
exports.PaciProfileController = PaciProfileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_paci_profile_dto_1.CreatePaciProfileDto]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('studentId')),
    __param(2, (0, common_1.Query)('isActive')),
    __param(3, (0, common_1.Query)('curso')),
    __param(4, (0, common_1.Query)('fromDate')),
    __param(5, (0, common_1.Query)('toDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findFiltered", null);
__decorate([
    (0, common_1.Get)('active'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)('historical'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findHistorical", null);
__decorate([
    (0, common_1.Get)('recent'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findRecent", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('student/:studentId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "findByStudentId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_paci_profile_dto_1.UpdatePaciProfileDto]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaciProfileController.prototype, "remove", null);
exports.PaciProfileController = PaciProfileController = __decorate([
    (0, common_1.Controller)('paci-profiles'),
    (0, common_1.UseGuards)(supabase_jwt_guard_1.SupabaseJwtGuard),
    __metadata("design:paramtypes", [paci_profile_service_1.PaciProfileService])
], PaciProfileController);
//# sourceMappingURL=paci-profile.controller.js.map