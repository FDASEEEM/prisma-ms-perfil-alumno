"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.supabaseConfig = exports.databaseConfig = void 0;
exports.databaseConfig = {
    url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/prisma_perfil_alumno',
};
exports.supabaseConfig = {
    jwtSecret: process.env.SUPABASE_JWT_SECRET || '',
};
exports.appConfig = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
};
//# sourceMappingURL=database.config.js.map