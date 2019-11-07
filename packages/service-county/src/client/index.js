import axios from './instance';
import config from '../config';
import FormData from 'form-data';

const makeAPiAdapter = client => ({
  post: async (reg_id) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data'}};

    const form = new FormData();
    form.append('reg_id', reg_id);
    
    const data= await client.post('/maps_obtener_comunas_por_regiones',form, config);
    console.log(data);
    return data;
  }
});

export default makeAPiAdapter(axios);
