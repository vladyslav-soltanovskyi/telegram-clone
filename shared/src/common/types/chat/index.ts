import { ChatTypes } from "../../enums";
import { ChatMemberDto } from "../chat-member";
import { LastMessageDto } from "../message";

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