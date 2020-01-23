import Auth from '../models/Auth';

export const createAuth = async (accessToken: string) => {
  const auth = await Auth.create({ accessToken, tokenType: 'Bearer' });
  return auth;
};

export const getAuth = async (accessToken: string) => {
  const auth = await Auth.findOne({
    where: {
      accessToken,
    },
  });
  return auth;
};

export const deleteAuth = async (accessToken: string) => {
  await Auth.destroy({
    where: {
      accessToken,
    },
  });
};
