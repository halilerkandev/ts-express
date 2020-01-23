import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { ICreateUser, ICredential } from '../util/interfaces';
import { JWT_SECRET_KEY, JWT_EXPIRE } from '../util/secrets';
import * as UserRepository from '../repositories/UserRepository';
import * as AuthRepository from '../repositories/AuthRepository';

export const register = async (user: ICreateUser) => {
  const foundUser = await UserRepository.getUserByEmail(user.email);
  if (foundUser) {
    return {
      error: 'User is already exist.',
    };
  }

  const newUser = await UserRepository.createUser(user);
  const token = jwt.sign({ userId: newUser.id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  const createdToken = await AuthRepository.createAuth(token);

  return createdToken;
};

export const login = async (credential: ICredential) => {
  const foundUser = await UserRepository.getUserByEmail(credential.email);
  if (!foundUser) {
    return {
      error: 'User cannot found.',
    };
  }

  const areMatched = await bcrypt.compare(credential.password, foundUser.password);
  if (!areMatched) {
    return {
      error: 'Invalid credentials.',
    };
  }

  const token = jwt.sign({ userId: foundUser.id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  const accessToken = await AuthRepository.createAuth(token);

  return { accessToken };
};

export const logout = async ({ accessToken }: { accessToken: string, userId: string }) => {
  await AuthRepository.deleteAuth(accessToken);
  return {
    message: 'Log out successfully!',
  };
};
