import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { ICreateUser, IUpdateUser } from '../util/interfaces';

export const createUser = async (user: ICreateUser) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const newUser = await User.create({
    ...user,
    password: hashedPassword,
  });
  return newUser;
};

export const getUserByEmail = async (email: string) => {
  const foundUser = await User.findOne({
    where: {
      email: {
        [Op.eq]: email,
      },
    },
  });
  return foundUser;
};

export const getUsersByIds = async (userIds: string[]) => {
  const users = await User.findAll({
    where: {
      id: {
        [Op.in]: userIds,
      },
    },
  });
  return users;
};

export const updateUserById = async (user: IUpdateUser, userId: string) => {
  const affectedRows = await User.update(
    { ...user },
    {
      where: {
        id: {
          [Op.eq]: userId,
        },
      },
    },
  );
  return affectedRows;
};

export const deleteUserById = async (userId: string) => {
  const numberOfDestroyedRows = await User.destroy({
    where: {
      id: {
        [Op.eq]: userId,
      },
    },
  });
  return numberOfDestroyedRows;
};
