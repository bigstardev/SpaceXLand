import axios from 'axios';

import {SPACEX_LAUNCHES_API} from 'constants/api-endpoints';

export const getShips = async () => {
  const response = await axios.get(SPACEX_LAUNCHES_API);
  if (!response.data) {
    throw new Error('Error while fetching Ships, please try again');
  }
  return response.data;
};
