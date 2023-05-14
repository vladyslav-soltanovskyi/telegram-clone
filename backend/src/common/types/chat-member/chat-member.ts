import { UserStatusTypes } from "@prisma/client";

export type ChatMemberDto = {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    status: UserStatusTypes;
  };
}