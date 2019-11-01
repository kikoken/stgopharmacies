import express from 'express';
import repository from '../repository';
import config from '../config';

const router = express.Router();
router.get('/counties/stgo', async (req, res) => {
  let response = await repository.counties.getCounties(config.REGION_ID);
  return res.status(200).send({...response});
});

export default router;
