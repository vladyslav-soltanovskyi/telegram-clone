import { AttachmentDto } from "../attachment";
import { UserResponseData } from "../user";

export type LastMessageDto = {
  id: string;
  createdAt: Date;
  text: string;
  sender: UserResponseData;
  attachments: AttachmentDto[];
  _count: {
    views: number;
  };
}