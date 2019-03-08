import Config from '../config';

export const getCars = () => {
  return fetch(Config.carUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors'
  });
};
