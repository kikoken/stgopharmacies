import axios from 'axios';
import config from '../config';

const instance = axios.create({
    'baseURL': `${config.PHARMACY_API_URL}`
});

export default instance;
