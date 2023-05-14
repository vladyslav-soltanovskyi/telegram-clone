import { UserResponseData } from "../user";

type SignInRequestData = {
  email: string;
  password: string;
};

type SignInResponseData = {
  accessToken: string;
  refreshToken: string;
  user: UserResponseData;
};


export type { SignInRequestData, SignInResponseData };
