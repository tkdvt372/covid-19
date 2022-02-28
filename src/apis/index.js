import axios from "axios";
import moment from 'moment';
export const getCountries = () => axios.get('https://api.covid19api.com/summary')
export const getReportByCountry = (country) => axios.get(`https://api.covid19api.com/dayone/country/${country}`)
