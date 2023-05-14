import { compare as bcryptCompare } from 'bcrypt';

export const verifyPassword = async (
  passwordHash: string,
  password: string,
): Promise<boolean> => bcryptCompare(passwordHash, password);