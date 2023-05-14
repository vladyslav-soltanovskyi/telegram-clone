import type { PrismaClient } from '@prisma/client';
import { ChatRepository } from './chat';
import { UserRepository } from './user';
import { UserSecurityRepository } from './user-security';

export const initRepositories = (
  prismaClient: PrismaClient,
) => ({
  userRepository: new UserRepository(prismaClient),
  chatRepository: new ChatRepository(prismaClient),
  userSecurityRepository: new UserSecurityRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type UserRepository,
  type ChatRepository,
  type UserSecurityRepository,
};
