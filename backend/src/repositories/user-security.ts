import { PrismaClient } from ".prisma/client";

export class UserSecurityRepository {
  private _dbClient: PrismaClient;

  constructor (dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public getByUserId(userId: string) {
    return this._dbClient.userSecurity.findFirst({
      where: { userId }
    });
  }

  public getByEmailToken(token: string) {
    return this._dbClient.userSecurity.findFirst({
      where: {
        emailActivationToken: token
      },
    })
  }

  public updateEmailToken(userId: string, token: string | null) {
    return this._dbClient.userSecurity.update({
      where: {
        userId: userId,
      },
      data: {
        emailActivationToken: token,
      },
    })
  }

  public async updateRefreshToken(
    id: string,
    refreshToken: string,
  ): Promise<void> {
    await this._dbClient.userSecurity.update({
      where: { userId: id },
      data: { refreshToken: refreshToken },
    });
  };

  public async updatePasswordToken(userId: string, passwordChangeToken: string | null): Promise<void> {
    await this._dbClient.userSecurity.update({
      where: { userId },
      data: { passwordChangeToken },
    });
  }

  public async updatePassword(userId: string, password: string): Promise<void> {
    await this._dbClient.userSecurity.update({
      where: { userId },
      data: { password },
    });
  }

  public async getRefreshToken(userId: string): Promise<{ refreshToken: string }> {
    return await this._dbClient.userSecurity.findUniqueOrThrow({
      where: { userId },
      select: { refreshToken: true },
    });
  }
}