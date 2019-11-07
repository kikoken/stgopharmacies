import express from 'express';
import repository from '../repository';
import config from '../config';

import logger from '../logger';

const router = express.Router();
router.get('/counties/stgo', async (req, res) => {
  try {
    let response = await repository.counties.getCounties(config.REGION_ID);
    return res.status(200).send({...response});
  } catch (error) {
    logger.debug(error);
    res.status(400).send({error: error});
  }
});

export default router;
