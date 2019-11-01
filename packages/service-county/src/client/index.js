import axios from './instance';
import config from '../config';

const makeAPiAdapter = client => ({
  get: async () => {
    let params = `?id_region=${config.REGION_ID}`;
    const { data } = await client.get(params);
    return data;
  }
});

export default makeAPiAdapter(axios);
