import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class SupabaseJwtGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
