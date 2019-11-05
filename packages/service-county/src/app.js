import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import config from './config';
import logger from '../logger';

// Routes
import {
    CountyRoute
} from './api';

const app = express();

// use
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/', CountyRoute);

app.server = app.listen(config.PORT, () => {
    logger.debug(`[COUNTIES] API running in port ${config.PORT}`);
});

export default app;
