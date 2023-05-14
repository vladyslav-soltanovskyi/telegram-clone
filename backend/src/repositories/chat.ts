import { ChatTypes, PrismaClient, Prisma } from '@prisma/client';
import { ChatDto } from '@types-app/index';

export class ChatRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getChatsByUserId(userId: string): Prisma.PrismaPromise<ChatDto[]> {
    return this._dbClient.chat.findMany({
      where: {
        members: {
          some: {
            userId: userId
          }
        }  
      },
      select: {
        id: true,
        title: true,
        poster: true,
        type: true,
        members: {
          where: {
            chat: {
              type: {
                equals: ChatTypes.DIALOG
              }
            }
          },
          select: {
            id: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                status: true,
                avatar: true
              }
            }
          }
        },
        messages: {
          take: 1,
          orderBy: {
            createdAt: 'desc'
          },
          select: {
            id: true,
            text: true,
            sender: true,
            attachments: true,
            createdAt: true,
            _count: {
              select: {
                views: true
              }
            }
          },
        },
        _count: {
          select: {
            messages: {
              where: {
                NOT: {
                  views: {
                    some: {
                      id: userId
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  }

  public create(data: {
    membersIds: string[],
    title?: string
    type?: "DIALOG" | "GROUP";
  }) {
    return this._dbClient.chat.create({
      data: {
        members: {
          connect: data.membersIds.map((id) => ({ id })) 
        },
        title: data.title,
        type: data.type
      }
    });
  }
}