import type { PrismaClient, User } from '@prisma/client';
import type { SignUpRequestData } from '@telegram-clone/shared';

export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public async create(signUpData: SignUpRequestData): Promise<User> {
    return await this._dbClient.user.create({
      data: {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        avatar: signUpData.avatar,
        userSecurity: {
          create: {
            password: signUpData.password
          }
        }
      }
    });
  }

  public async getById(id: string): Promise<User> {
    return await this._dbClient.user.findFirst({
      where: {
        id
      },
    });
  }

  public async getByIdAndRefreshToken(id: string, refreshToken: string): Promise<User> {
    return await this._dbClient.user.findFirst({
      where: {
        id,
        userSecurity: {
          refreshToken
        },
      }
    })
  }

  public async getByEmail(email: string): Promise<User> {
    return await this._dbClient.user.findFirst({
      where: {
        email: { mode: 'insensitive', equals: email },
      },
    });
  }

  public async updatePassword(email: string, password: string): Promise<User> {
    return await this._dbClient.user.update({
      where: {
        email,
      },
      data: {
        userSecurity: {
          update: {
            password: password
          }
        }
      },
    });
  }

  public async verifyEmail(userId: string): Promise<User> {
    return await this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        isVerified: true,
      },
    });
  }

  public async getByToken(token: string): Promise<User> {
    return await this._dbClient.user.findFirst({
      where: {
        userSecurity: {
          refreshToken: token
        }
      },
    });
  }
}
