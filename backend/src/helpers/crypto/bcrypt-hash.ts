import { genSalt, hash } from 'bcrypt';

const SALT_ROUNDS = 10;

export const bcryptHash = async (value: string): Promise<string> => {
  const salt = await genSalt(SALT_ROUNDS);
  return hash(value, salt);
};