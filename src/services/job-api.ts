import axios from 'axios';
import { IJob } from '../types/job';

const API_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

export const fetchJobs = async (): Promise<IJob[]> => {
  const jobs = await axios.get<Array<IJob>>(` ${BASE_URL}?access_token=${API_TOKEN}`);
  return jobs.data;
};

