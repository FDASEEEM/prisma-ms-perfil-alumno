import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { supabaseConfig } from '../../config/database.config';
import jwt from 'jsonwebtoken';

@Injectable()
export class SupabaseJwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    const token = authHeader.substring(7);

    try {
      const decoded = jwt.verify(token, supabaseConfig.jwtSecret) as any;

      if (!decoded.user_id) {
        throw new UnauthorizedException('Invalid token: missing user_id');
      }

      // Attach user information to request for use in controllers/services
      request['user'] = {
        userId: decoded.user_id,
        // Future: Add role, email_verified, etc. when needed
      };

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
