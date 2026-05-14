import { UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken', () => ({
  __esModule: true,
  default: {
    verify: jest.fn(),
  },
}));

describe('SupabaseJwtGuard', () => {
  const verifyMock = (jwt as unknown as { verify: jest.Mock }).verify;

  const createContext = (headers: Record<string, string | undefined>) => {
    const request: Record<string, unknown> = { headers };
    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
      }),
    } as any;
    return { context, request };
  };

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env.SUPABASE_JWT_SECRET = 'secret';
  });

  it('rejects when header is missing', async () => {
    const { SupabaseJwtGuard } = require('./supabase-jwt.guard');
    const guard = new SupabaseJwtGuard();
    const { context } = createContext({});

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
  });

  it('rejects when token is invalid', async () => {
    verifyMock.mockImplementation(() => {
      throw new Error('invalid');
    });

    const { SupabaseJwtGuard } = require('./supabase-jwt.guard');
    const guard = new SupabaseJwtGuard();
    const { context } = createContext({ authorization: 'Bearer bad' });

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
  });

  it('rejects when user_id is missing', async () => {
    verifyMock.mockReturnValue({});

    const { SupabaseJwtGuard } = require('./supabase-jwt.guard');
    const guard = new SupabaseJwtGuard();
    const { context } = createContext({ authorization: 'Bearer ok' });

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
  });

  it('accepts valid token and attaches user', async () => {
    verifyMock.mockReturnValue({ user_id: 'u1' });

    const { SupabaseJwtGuard } = require('./supabase-jwt.guard');
    const guard = new SupabaseJwtGuard();
    const { context, request } = createContext({ authorization: 'Bearer ok' });

    await expect(guard.canActivate(context)).resolves.toBe(true);
    expect(request.user).toEqual({ userId: 'u1' });
  });
});
