import { Attachment, User } from "@prisma/client";

export type LastMessageDto = {
  id: string;
  createdAt: Date;
  text: string;
  sender: User;
  attachments: Attachment[];
  _count: {
    views: number;
  };
}