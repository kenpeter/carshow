import Config from '../config';

export const getCars = () => {

  console.log('-- so --');
  console.log(Config);

  return fetch(Config.carUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors'
  });
};
