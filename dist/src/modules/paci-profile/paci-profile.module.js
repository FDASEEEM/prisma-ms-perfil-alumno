"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaciProfileModule = void 0;
const common_1 = require("@nestjs/common");
const paci_profile_service_1 = require("./paci-profile.service");
const paci_profile_controller_1 = require("./paci-profile.controller");
const prisma_service_1 = require("../../common/services/prisma.service");
let PaciProfileModule = class PaciProfileModule {
};
exports.PaciProfileModule = PaciProfileModule;
exports.PaciProfileModule = PaciProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [paci_profile_controller_1.PaciProfileController],
        providers: [paci_profile_service_1.PaciProfileService, prisma_service_1.PrismaService],
        exports: [paci_profile_service_1.PaciProfileService],
    })
], PaciProfileModule);
//# sourceMappingURL=paci-profile.module.js.map