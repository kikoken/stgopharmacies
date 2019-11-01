import client from '../client';

// repository
import countiesRepository from './counties.repository';

const counties = countiesRepository(client);

const repository = () => {
    return Object.freeze({
        counties
    });
};

export default repository();
