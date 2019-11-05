import axios from 'axios';
import config from '../config';

const instance = axios.create({
    'baseURL': `${config.COUNTIES_API_URL}`
});

export default instance;
