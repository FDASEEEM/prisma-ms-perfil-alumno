"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaciProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_paci_profile_dto_1 = require("./create-paci-profile.dto");
class UpdatePaciProfileDto extends (0, mapped_types_1.PartialType)(create_paci_profile_dto_1.CreatePaciProfileDto) {
}
exports.UpdatePaciProfileDto = UpdatePaciProfileDto;
//# sourceMappingURL=update-paci-profile.dto.js.map