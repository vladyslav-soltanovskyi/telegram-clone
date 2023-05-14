import { ChatTypes } from "@prisma/client";
import { LastMessageDto, ChatMemberDto } from "@types-app/index";

export type ChatDto = {
  id: string;
  messages: LastMessageDto[];
  title: string;
  type: ChatTypes;
  members: ChatMemberDto[];
  _count: {
    messages: number;
  };
}