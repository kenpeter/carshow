import Config from '../config';

const getCars = () => {
  return fetch(Config.carUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors'
  });
};

export default getCars;
