import { APIError, betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { createAuthMiddleware } from 'better-auth/api';

type CommunityAuthOptions = {
  database: Parameters<typeof prismaAdapter>[0];
};

function getTrustedOrigins(): string[] {
  return (process.env.BETTER_AUTH_TRUSTED_ORIGINS ?? 'http://localhost:3000')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function getAuthSecret(): string {
  if (process.env.BETTER_AUTH_SECRET) {
    return process.env.BETTER_AUTH_SECRET;
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error('BETTER_AUTH_SECRET is required in production.');
  }

  return 'socializ-development-secret-change-me';
}

export function createCommunityAuth({ database }: CommunityAuthOptions) {
  return betterAuth({
    appName: 'Socializ',
    baseURL: process.env.BETTER_AUTH_URL ?? 'http://localhost:3001',
    basePath: '/api/auth',
    secret: getAuthSecret(),
    trustedOrigins: getTrustedOrigins(),
    database: prismaAdapter(database, { provider: 'postgresql' }),
    emailAndPassword: {
      enabled: true,
    },
    hooks: {
      before: createAuthMiddleware(async (ctx) => {
        if (
          ctx.path.startsWith('/sign-in/') ||
          ctx.path.startsWith('/sign-up/')
        ) {
          return;
        }
      }),
    },
    databaseHooks: {
      user: {
        create: {
          before: async (_, ctx) => {
            if (!ctx) {
              throw APIError.from('INTERNAL_SERVER_ERROR', {
                code: 'AUTH_CONTEXT_UNAVAILABLE',
                message: 'The authentication context is unavailable.',
              });
            }

            const users = await ctx.context.adapter.count({ model: 'user' });

            if (users >= 1) {
              throw APIError.from('CONFLICT', {
                code: 'COMMUNITY_USER_LIMIT_REACHED',
                message: 'Community Edition supports one user only.',
              });
            }
          },
        },
      },
    },
  });
}
