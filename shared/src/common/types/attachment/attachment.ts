import { AttachmentTypes } from "../../enums";

export type AttachmentDto = {
  id: string;
  userId: string;
  messageId: string;
  type: AttachmentTypes;
  url: string;
  title: string;
  ext: string;
  createdAt: Date;
  updatedAt: Date;
}