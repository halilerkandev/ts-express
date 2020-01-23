import express from 'express';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import cookieParser from 'cookie-parser';
import { logger } from './util/logger';
import { PORT } from './util/secrets';
import { dbContext } from './config/dbContext';
import Controller from './controllers';

const app = express();

app.set('port', PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use('/rpc', Controller);

dbContext.sync().then(() => {
  app.listen(app.get('port'), () => logger.info(`Example app listening on port: ${app.get('port')}`));
});
