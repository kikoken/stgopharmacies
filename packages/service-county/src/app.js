import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import config from './config';

// Routes
import {
    PharmacieRoute
} from './api';

const app = express();

// use
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/', PharmacieRoute);

app.server = app.listen(config.PORT, () => {
    console.log(`[COUNTIES] API running in port ${config.PORT}`);
});

export default app;
