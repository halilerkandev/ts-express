import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getAuth } from '../repositories/AuthRepository';
import { logger } from '../util/logger';
import { JWT_SECRET_KEY } from '../util/secrets';

export const accessTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { method } = req.body;
  req.body = {
    ...req.body,
    jsonrpc: '2.0',
    id: 1,
  };

  if (['register', 'login'].includes(method)) {
    return next();
  }

  let token;
  let foundedToken;

  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    foundedToken = await getAuth(token);
  }

  if (!foundedToken) {
    return next(new Error('Not authorize to access this route'));
  }

  try {
    const decoded = jwt.verify(foundedToken.accessToken, JWT_SECRET_KEY);
    req.body = {
      ...req.body,
      params: {
        ...req.body.params,
        userId: (decoded as any).userId,
        accessToken: foundedToken.accessToken,
      },
    };
    logger.info(JSON.stringify(req.body));
  } catch (error) {
    logger.error(JSON.stringify(error.message));
  }

  return next();
};
