type SignUpRequestData = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  password: string;
};

type SignUpResponseData = {
  message: string;
};


export type { SignUpRequestData, SignUpResponseData };
