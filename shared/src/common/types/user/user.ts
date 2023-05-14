import { UserStatusTypes } from "../../enums";

export type UserResponseData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  userSecurityId: string | null;
  status: UserStatusTypes;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}