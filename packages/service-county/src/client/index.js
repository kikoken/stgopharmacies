import axios from './instance';
import config from '../config';

const makeAPiAdapter = client => ({
  post: async (reg_id) => {
    const { data } = await client.post('/maps_obtener_comunas_por_regiones',{
      reg_id
    });
    return data;
  }
});

export default makeAPiAdapter(axios);
