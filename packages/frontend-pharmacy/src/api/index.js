import axios from 'axios';
// repositories
import CountyRepository from './CountyRepository';
import PharmacyRepository from './PharmacyRepository';

const url = 'http://farmacia-turno-api.us-west-1.elasticbeanstalk.com';
const county = CountyRepository(axios, url);
const pharmacy = PharmacyRepository(axios, url);

export default {
  county,
  pharmacy
}