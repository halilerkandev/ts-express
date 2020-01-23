import { Router } from 'express';
import jsonRouter from 'express-json-rpc-router';
import * as UserService from '../services/UserService';
import * as MessageService from '../services/MessageService';
import { accessTokenMiddleware } from '../services/CredentialService';

const router = Router();

router.post(
  '/',
  accessTokenMiddleware,
  jsonRouter({ methods: { ...UserService, ...MessageService } }),
);

export default router;
